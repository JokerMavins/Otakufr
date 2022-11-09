import React from "react";
import {Link} from "react-router-dom"

const index = () => {
  const alpha = [
    "#",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="justify-center flex md:gap-3">
     {
        alpha.map((value, index)=>{
            return(
                <div keys={index} className="hover:underline bg-red-500 rounded-full md:w-10 h-10 mt-6 space-x-10 text-white md:flex md:justify-center md:items-center capitalize shadow-md shadow-red-600"><Link to="/list_anime" className="">{value}</Link></div>
            )
        })
     }
    </div>
  );
};

export default index;
