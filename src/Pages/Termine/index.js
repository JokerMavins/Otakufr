import React from "react";
import { useFilterContext } from "../../Services/Contents/filters_context";
import { Link } from "react-router-dom";

const Termine = () => {
  const { filtered_animes: anime } = useFilterContext();
  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center flex flex-col justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">Anime Terminé</h2>
        </div>
        {anime.map((anime) => {
          return anime.status == "completed" ? (
            <Link to={`/anime/${anime.id}`} className="w-full text-center md:text-justify items-center md:h-auto border-2 flex md:flex-row flex-col gap-y-3 my-3 rounded-md">
              <img src={anime.image} className={"w-60 p-2 h-80 rounded-md ml-2"} />
              <div className="w-2/3 p-6 space-y-5">
                <h2 className="font-medium text-red-500 text-2xl">{anime.titre_alternatif}</h2>
                <h3 className="text-sm">
                  Synopsis :{" "}
                  <span className="capitalize">
                    {anime.synopsis}
                  </span>
                </h3>
                <button type="button" className="bg-violet-700 text-white w-36 h-10">
                  Voir l'anime 
                </button>
              </div>
            </Link>
          ) : null;
        })}
      </article>
    </section>
  );
};

export default Termine;
