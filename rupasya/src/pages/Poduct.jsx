import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';

const Poduct = () => {
  const { productID} = useParams();
  const{products}=useContext(Shopcontext)
  const[productdata,setproductdata]=useState(false);
  
  const fetchproductdata = async () => {
    products.map((item)=>
    {
      if(item.id==productID)
      {
        setproductdata(item);
        console.log(item);
        return null;
      }
    })
  }

  useEffect(()=>
  {
    fetchproductdata();
  },[productID,products])


  return (
    <div>
      
    </div>
  )
}

export default Poduct
