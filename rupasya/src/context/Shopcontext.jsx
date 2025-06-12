import { createContext } from "react";
import {product} from "../assets/"
 export const Shopcontext = createContext();
 const Shopcontextprovider = (props) =>
 {

    const currency ='$'
    const delivery_fee=10;

    const value ={
product,currency,delivery_fee
    }
    return (
        <Shopcontext.Provider value={value}>
{props.children}

        </Shopcontext.Provider>
    )
 }
 export default Shopcontextprovider;