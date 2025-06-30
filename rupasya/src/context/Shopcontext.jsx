import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { use } from "react";
export const Shopcontext = createContext();
const Shopcontextprovider = (props) => {
  const currency = "$";
  const delivery_fee = 75;
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const [search, setsearch] = useState("");
  const [showsearch, setshowserach] = useState(false);
  const [cartiteams, setcartiteams] = useState({});
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [token,settoken]=useState('')
  //const products=[]
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
      //tyo tostify wala error kya
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

  const getcartcount = () => {
    let totalcount = 0;
    for (const iteams in cartiteams) {
      for (const item in cartiteams[iteams])
        try {
          if (cartiteams[iteams][item] > 0) {
            totalcount = totalcount + cartiteams[iteams][item];
          }
        } catch (error) {}
    }
    return totalcount;
  };

  // Fix getcartamount to be synchronous and correct the variable name typo
  const getcartamount = () => {
    let totalamount = 0;
    for (const iteams in cartiteams) {
      let iteainfo = products.find((product) => product.id == iteams);
      for (const item in cartiteams[iteams]) {
        try {
          if (cartiteams[iteams][item] > 0) {
            totalamount += iteainfo.price * cartiteams[iteams][item];
          }
        } catch (error) {}
      }
    }
    return totalamount;
  };

  useEffect(() => {
    console.log(cartiteams);
  }, [cartiteams]);

  const getproductdata = async () => {
    try {
      const response = await axios.get(backendurl + "/api/product/list");
      if (response.data.success) {
        // Ensure every product has both id and _id
        const productsWithId = response.data.products.map((p) => ({
          ...p,
          id: p._id ? String(p._id) : undefined,
          _id: p._id ? String(p._id) : undefined,
        }));
        setproducts(productsWithId);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getproductdata();
  }, []);



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
    updatequantity,
    getcartamount,
    navigate,
    settoken,
    backendurl,token
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
export default Shopcontextprovider;
