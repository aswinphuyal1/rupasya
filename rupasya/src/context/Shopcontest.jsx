import { createContext } from "react";

 export const Shopcontext = createContext();
 const Shopcontextprovider = ( ) =>
 {
    const value ={

    }
    return (
        <Shopcontext.Provider value={value}>
{props.children}

        </Shopcontext.Provider>
    )
 }