import React from "react";
import { useAnimesContext } from "../Services/Contents/animes_context";
import { Link } from "react-router-dom";

const Actuality = () => {
  const { animes: anime } = useAnimesContext();

  return (
    <article className="col-span-2 hidden min-h-screen lg:flex flex-col items-center gap-y-4">
      <div className="bg-black font-bold flex w-96 border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
        <h2 className="text-white">MERCI De Soutenir Otakufr!</h2>
      </div>
      <div className="w-80 h-40 bg-slate-600">
        <img src={"https://i.ibb.co/q5NbsVc/otakufr-youtube-hq.jpg"} className={"w-full h-full"} />
      </div>
      <div className="bg-black font-bold flex w-96 border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
        <h2 className="text-white">Demandes Des Donateurs</h2>
      </div>
      <div className="space-y-1">
        {anime.slice(1,13).map((anime) => {
          return anime.status == "completed" ? (
            <Link to={`/anime/${anime.id}`} className="w-80 h-20 border-2 items-center flex gap-x-4">
              <img src={anime.image} className={"w-14 h-14 rounded-lg ml-2"} />
              <div className="justify-around flex flex-col">
                <h2 className="text-sm font-semibold">{anime.titre_alternatif}</h2>
                <h3 className="text-sm">
                  Status :{" "}
                  <span className="capitalize font-semibold text-sm">
                    {anime.status} ❤️
                  </span>
                </h3>
              </div>
            </Link>
          ) : null;
        })}
      </div>
      <div className="bg-black font-bold flex w-96 border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
        <h2 className="text-white">Top 10 Hebdomadaire</h2>
      </div>
      <div className="space-y-1">
        {anime.slice(1,15).map((anime) => {
          return anime.status == "continue" ? (
            <Link to={`/anime/${anime.id}`} className="w-80 h-20 border-2 items-center flex gap-x-4">
              <img src={anime.image} className={"w-14 h-14 rounded-lg ml-2"} />
              <div className="justify-around flex flex-col">
                <h2 className="text-sm font-semibold">{anime.titre_alternatif}</h2>
                <h3 className="text-sm">
                  Status : {" "}
                  <span className="capitalize font-semibold text-sm">
                    {anime.status} ❤️
                  </span>
                </h3>
              </div>
            </Link>
          ) : null;
        })}
      </div>
      <div className="w-80 h-40 bg-slate-600">
        <img src={"https://i.ibb.co/kg3hHbm/otakufr-discord.jpg"} className={"w-full h-full"} />
      </div>
    </article>
  );
};

export default Actuality;
