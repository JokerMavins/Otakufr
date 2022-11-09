import React, { useEffect, useState } from "react";
import { Anime } from "./";
import { useAnimesContext } from "../Services/Contents/animes_context";
import { useFilterContext } from "../Services/Contents/filters_context";
import paginate from "../Utils/paginate";
import {Loading} from "./";

const DailyAnimeList = () => {
  const {
    animes_loading: loading,
    animes_error: error,
    animes: anime1,
  } = useAnimesContext();
  const { filtered_animes: anime } = useFilterContext();
  const [page, setPage] = useState(0);
  const animes = paginate(anime);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center flex flex-col gap-y-4 justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">Date !</h2>
        </div>
        {anime[page] ? (
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 place-items-center text-center">
            {animes[page].map((anime) => {
              return <Anime key={anime.id} {...anime} />;
            })}
          </div>
        ) : (
          <Loading />
        )}
      </article>
      {loading ? (
          <Loading />
        ) : (
      <div className="bottom-0 items-center justify-center flex gap-6">
        {animes.map((anime, index) => {
          return (
            <button
              onClick={() => handlePage(index)}
              onFocus={'b'}
              key={index}
              className="w-10 h-10 bg-blue-600 rounded-md focus:bg-white focus:border-2 focus:border-blue-600 focus:text-blue-600 text-white"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
       )}
    </section>
  );
};

export default DailyAnimeList;
