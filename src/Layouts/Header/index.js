import React from "react";
import { Nav } from "../../Components";
import { useFilterContext } from "../../Services/Contents/filters_context";
import {FaMoon} from "react-icons/fa"

const Header = () => {
  const { text, updateFilters, setLight } = useFilterContext();
  return (
    <section className="min-h-full justify-center items-center flex">
      <div className="container bg-black border-b-2 border-red-500 h-24 justify-around items-center flex">
        <div>
          <img src={require("../../Assets/otakufr.png")} />
        </div>
        <Nav />
        <div className="space-x-3">
          <input
            type={"search"}
            name="text"
            value={text}
            onChange={updateFilters}
            placeholder="Search"
            className="p-2 w-52 h-9 rounded-sm bg-white"
          />
          <button className="text-red-500 font-bold">Search</button>
        </div>
      </div>
      <div className="fixed bottom-20 right-20">
        <button onClick={()=>setLight()} className="w-16 h-16 rounded-lg border-2 flex justify-center items-center bg-slate-800">
          <FaMoon className="text-gray-50 text-3xl"/>
        </button>
      </div>
    </section>
  );
};

export default Header;
