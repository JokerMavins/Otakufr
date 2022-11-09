import React, {useState} from "react";
import { useAnimesContext } from "../../Services/Contents/animes_context";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const {animes: anime} = useAnimesContext();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

  anime.sort((a, b) => {return a.titre_alternatif.localeCompare(b.titre_alternatif) })

  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center flex flex-col justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">Liste d'animes !</h2>
        </div>
        <div className="grid grid-cols-2 p-10">
          <ul>
          <h2 className="text-3xl font-extrabold my-4">(#)</h2>
            {
              anime.map((anime)=>{
                return(
                  <li className="list-disc"><Link to={`/anime/${anime.id}`} className="text-red-500 font-extrabold text-1xl">{anime.titre_alternatif}</Link></li>
                )
              })
            }
          </ul>
          
        </div>
      </article>
    </section>
  );
};

export default AnimeList;
