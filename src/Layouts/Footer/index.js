import React from "react";

const Footer = () => {
  return (
    <section className="bg-black mt-5 h-32 items-center flex">
      <div className="container grid grid-cols-6 justify-center items-center">
        <div className="md:col-span-4 col-span-6 flex justify-center md:items-end items-center flex-col">
          <div className="text-white font-bold flex w-1/2 border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
            <h2>Disclaimer !</h2>
          </div>
          
        </div>
        <div className="md:col-span-2 col-span-6 flex justify-center md:items-end items-center flex-col">
          <div className="text-white font-bold flex w-1/2 border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
            <h2>Contactez-nous !</h2>
          </div>
          <h2>Email: <span className="text-red-500">otakufr.com@gmail.com</span> </h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;
