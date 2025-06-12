import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom'

const Productitem = ({id,image,name,prize}) => {

const{currency}= useContext(Shopcontext)

  return (
    <link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          className="hover:scale-110 translatiob ease-in-out"
          src={image}
        ></img>
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </link>
  );
}

export default Productitem
