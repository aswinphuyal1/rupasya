import { createContext } from "react";

export const Shopcontext = createContext();
const Shopcontextprovider = (props) => {
  const currency = "$";
  const delivery_fee = 75;
  const products = [
    {
      id: 1,
      name: "Lipstick",
      price: 15,
      image: "/src/assets/makeup.png",
      Bestsheller: true,
      category: "Makeup Products",
      subcategory: "BASIC",
    },
    {
      id: 2,
      name: "Foundation",
      price: 25,
      image: "/src/assets/product.jpg",
      Bestsheller: false,
      category: "Skincare Products",
      subcategory: "PREMIUM",
    },
  ];

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
export default Shopcontextprovider;
