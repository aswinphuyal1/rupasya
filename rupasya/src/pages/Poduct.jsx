import React from 'react'
import { useParams } from 'react-router-dom'

const Poduct = () => {
  const { productID} = useParams();
  console.log(productID)
  return (
    <div>
      
    </div>
  )
}

export default Poduct
