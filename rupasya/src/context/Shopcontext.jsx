import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Shopcontext = createContext();
const Shopcontextprovider = (props) => {
  const currency = "$";
  const delivery_fee = 75;
  const [search, setsearch] = useState("");
  const [showsearch, setshowserach] = useState(false);
  const [cartiteams, setcartiteams] = useState({});


  const updatequantity = (iteamid, size, quantity) => {
    let cartdata = structuredClone(cartiteams);
    if (cartdata[iteamid] && cartdata[iteamid][size] !== undefined) {
      if (quantity > 0) {
        cartdata[iteamid][size] = quantity;
      } else {
        delete cartdata[iteamid][size];
        // If no sizes left for this product, remove the product key
        if (Object.keys(cartdata[iteamid]).length === 0) {
          delete cartdata[iteamid];
        }
      }
      setcartiteams(cartdata);
    }
  };


  const addtocart = async (iteamid, size) => {
    if (!size) {
      toast.error("Select size");
      return;
    }
    let cartdata = structuredClone(cartiteams);
    if (cartdata[iteamid]) {
      if (cartdata[iteamid][size]) {
        cartdata[iteamid][size] = cartdata[iteamid][size] + 1;
      } else {
        {
          cartdata[iteamid][size] = 1;
        }
      }
    } else {
      cartdata[iteamid] = {};
      cartdata[iteamid][size] = 1;
    }
    setcartiteams(cartdata);
  };

  const getcartcount =()=>
  {
    let totalcount =0;
    for(const iteams in cartiteams)
    {
      for( const item in cartiteams[iteams])
        try{
      if(cartiteams[iteams][item]>0)
      {
        totalcount += cartiteams[iteams][item];
      }
      }
      catch(error)
      {

      }
    }
    return totalcount;

  }
  const products = [
    {
      id: 1,
      name: "Lipstick",
      price: 15,
      image: ["/src/assets/makeup.png"], //"/src/assets/2.png"

      Bestsheller: true,
      category: "Makeup Products",
      subcategory: "BASIC",
      size: ["200ml", "250ml", "500ml", "1L"],
      decription:
        "this is the best product you can find all over nepal with chepest price and with good delivery witha 99% costomer  satisataction",

      delivery_fee: "23",
    },
    {
      id: 2,
      name: "Foundation",
      price: 25,
      image: ["/src/assets/product.jpg"],
      Bestsheller: false,
      category: "Skincare Products",
      subcategory: "PREMIUM",
      size: ["200ml", "250ml", "500ml", "1L"],
      decription:
        "this is the best product you can find all over nepal with chepest price and with good delivery witha 99% costomer  satisataction",

      delivery_fee: "23",
    },
    {
      id: 3,
      name: "2",
      price: 50,
      image: ["/src/assets/product.jpg"],
      Bestsheller: false,
      category: "Skincare Products",
      subcategory: "PREMIUM",
      size: ["200ml", "250ml", "500ml", "1L"],
      decription:
        "this is the best product you can find all over nepal with chepest price and with good delivery witha 99% costomer  satisataction",

      delivery_fee: "23",
    },
    {
      id: 4,
      name: "3",
      price: 609,
      image: ["/src/assets/product.jpg"],
      Bestsheller: false,
      category: "Skincare Products",
      subcategory: "PREMIUM",
      size: ["200ml", "250ml", "500ml", "1L"],
      decription:
        "this is the best product you can find all over nepal with chepest price and with good delivery witha 99% costomer  satisataction",
      delivery_fee: "23",
    },
  ];

  useEffect(() => {
    console.log(cartiteams);
  }, [cartiteams]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowserach,
    cartiteams,
    addtocart,
    getcartcount,
    updatequantity
  };



  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
export default Shopcontextprovider;
