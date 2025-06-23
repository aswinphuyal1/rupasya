import React from "react";
import contact from "../assets/contact.png";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img className="w-full md:max-w-[450px]" src={contact} alt="" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our store</p>
            <p className=" text-start text-sm text-gray-500">
              Kalanki Chowk,Ring Road, Ward No. 14 <br />
              Kathmandu 44600, Bagmati Province,Nepal
            </p>
            <p className=" text-start text-sm text-gray-500">
             Tel: 01-2232322
              <br />
              Email:rupasya@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
  
};

export default Contact;
