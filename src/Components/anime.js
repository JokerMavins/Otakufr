import React from "react";
import { Link } from "react-router-dom";

const Anime = ({titre_alternatif, image, id}) => {
  return (
    <Link to={`/anime/${id}`} className="flex flex-col items-center justify-center gap-y-2 my-3">
      <h1 className="font-bold hover:underline">{titre_alternatif}</h1>
      <img src={image} resizeMode={"cover"} className={"md:w-72 w-72 h-96 bg-cover hover:opacity-40 hover:duration-500 z-10 border-2 border-red-600 hover:transition-all transition-all hover:scale-105 rounded-lg"}/>
    </Link>
  )
}

export default Anime