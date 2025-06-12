import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';

const Latestcolledtion = () => {

    const {products}= useContext(Shopcontext);
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
<Title text1={'LATEST'} text2={'COLLECTION'}  />
      </div>
      
    </div>
  )
}

export default Latestcolledtion
