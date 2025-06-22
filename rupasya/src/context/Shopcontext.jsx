import { createContext, useState } from "react";

export const Shopcontext = createContext();
const Shopcontextprovider = (props) => {
  const currency = "$";
  const delivery_fee = 75;
const[search,setsearch]=useState('')
const [showsearch,setshowserach] =useState(false)
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
    },
  ];

  const value = {
    products, 
    currency,
    delivery_fee,
    search,setsearch,showsearch,setshowserach,
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
export default Shopcontextprovider;

