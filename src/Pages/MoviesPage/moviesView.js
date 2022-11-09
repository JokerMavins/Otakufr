import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../../Services/Contents/filters_context";
import { Link } from "react-router-dom";
import { animes_url as url } from "../../Utils/constant";

import { useAnimesContext } from "../../Services/Contents/animes_context";

const MovieView = () => {
    const { fetchSingleAnimes, single_anime: anime } = useAnimesContext();
    const { id } = useParams();
  
    useEffect(() => {
      fetchSingleAnimes(`${url}${id}`);
    }, [id]);
  
  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center flex flex-col justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">{anime.titre_alternatif}</h2>
        </div>
        <div className="justify-start flex w-full my-10 items-center gap-2">
          <Link to="/" className="text-red-600 text-xl font-bold tracking-wider hover:underline hover:text-gray-600">Acceuil </Link>{"/"}
          <Link to={`/anime/${id}`} className="text-red-600 text-xl font-bold tracking-wider hover:underline hover:text-gray-600">{anime.titre_alternatif}</Link>{"/"}
          <h2 className="text-gray-500 text-xl font-bold tracking-wider">{anime.titre_alternatif}</h2>
        </div>
        <div className="justify-start flex w-full items-center gap-2">
          <h2 className="text-xl font-normal tracking-wider">Episodes: </h2>

        </div>
      </article>
    </section>
  );
};

export default MovieView;
