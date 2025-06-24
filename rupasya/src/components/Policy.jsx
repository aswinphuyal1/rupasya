import React from 'react'
import exchange from '../assets/exchange.jpg'
import returnpolicy from '../assets/return.png'
import support from '../assets/support.png'
const Policy = () => {
  return (
    <div className="flex  flex-col sm:flex-row justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-70">
      <div>
        <img src={exchange} className="w-12 m-auto md-5" />
        <p className="font-semibold">Easy exchange</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={returnpolicy} className="w-12 m-auto md-5" />
        <p className="font-semibold">Return policy</p>
        <p className="text-gray-400">We offer upto 3 days return policy</p>
      </div>

      <div>
        <img src={support} className="w-12 m-auto md-5" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We offer 27/7 customer support</p>
      </div>

    </div>
  );
}

export default Policy
//