import React from "react";

const Staff = () => {
  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center flex flex-col justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">Staff !</h2>
        </div>
        <img
          src={require("../../Assets/Otaku-FR-2021-STAFF-HQ-V2.jpg")}
          className="w-4/5 h-3/4 my-5"
          alt="Staff" 
        />
        <h1>Designed by : Maddos</h1>
      </article>
    </section>
  );
};

export default Staff;
