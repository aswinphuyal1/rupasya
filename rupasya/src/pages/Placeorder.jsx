import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Carttotal from "../components/Carttotal";
import esewa from "../assets/esewa.png";
import khalti from "../assets/khalti.png";
import ime from "../assets/ime.png";
import { Shopcontext } from "../context/Shopcontext";
import { data } from "react-router-dom";
const Placeorder = () => {
  const [method, setmethod] = useState("khalti");
  const {
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
    backendurl,
    token,
    setcartiteams,
  } = useContext(Shopcontext);
  
  const [formdata, setformdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    province:'',
    zipcode:'',
    phone:'',
  });


  const onchangehandelr =(e)=>
  {
    const name=e.target.name;
    const value =e.target.value
    setformdata(data=>({...data,[name]:value}))
  }

const onsubmithandler = async (e) => {
  e.preventDefault()
  try {
    const orderitem =[]
    for(const items in cartiteams)
    {
      for(const item in cartiteams[items])
      {
        if(cartiteams[items][item]>0)
        {
          const iteaminfo =structuredClone(cartiteams)
        }
      }
    }
    
  } catch (error) {
    
  }
}

  return (
    <form onSubmit={onsubmithandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* left side */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"YOUR"} text2={"INFO"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onchangehandelr}
            name="firstname"
            value={formdata.firstname}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="first name"
          />
          <input
            required
            onChange={onchangehandelr}
            name="lastname"
            value={formdata.lastname}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="last name"
          />
        </div>
        <input
          required
          onChange={onchangehandelr}
          name="email"
          value={formdata.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="email"
          placeholder="email"
        />
        <input
          required
          onChange={onchangehandelr}
          name="street"
          value={formdata.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onchangehandelr}
            name="city"
            value={formdata.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onchangehandelr}
            name="province"
            value={formdata.province}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Province"
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onchangehandelr}
            name="zipcode"
            value={formdata.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onchangehandelr}
            name="phone"
            value={formdata.phone}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Phone number"
          />
        </div>
      </div>
      {/*right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <Carttotal />
        </div>
        <div className="mt-14">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* payment to be sleected */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setmethod("esewa")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "esewa" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-10 mx-4" src={esewa} alt="esewa" />
            </div>

            <div
              onClick={() => setmethod("khalti")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "khalti" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-10 mx-4" src={khalti} alt="khalti" />
            </div>
            <div
              onClick={() => setmethod("ime")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "ime" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-10 mx-4" src={ime} alt="ime" />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button 
              type="submit"
         
              className="bg-black text-white text-sm my-8 px-8 py-3 justify-start"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
//
