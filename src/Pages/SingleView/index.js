import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { animes_url as url } from "../../Utils/constant";
import { Link } from "react-router-dom";

import { useAnimesContext } from "../../Services/Contents/animes_context";

const SingleView = () => {
  const { fetchSingleAnimes, single_anime: anime } = useAnimesContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleAnimes(`${url}${id}`);
  }, [id]);

  const {
    titre_original,
    titre_alternatif,
    image,
    genre,
    synopsis,
    auhor,
    pays,
    origine,
    episode,
    saison,
    theme,
    age,
    status,
    format,
    studio,
    licence,
    date_diffusion,
    derniere_diff,
    episodes,
  } = anime;

  return (
    <section className="min-w-full min-h-full lg:col-span-4 col-span-6">
      <article className="items-center w-full flex flex-col  justify-center">
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">{titre_alternatif}</h2>
        </div>
        <div className="w-full h-auto flex border-2 my-2 sm:flex-row flex-col">
          <img src={image} className="w-1/3 p-2 h-auto rounded-md" />
          <div className="w-2/3 p-6 items-start gap-y-1">
            <h2 className="font-medium text-red-500 text-lg">Synopsis:</h2>
            <p className="text-sm">{synopsis}</p>
            <h2 className="font-medium text-red-500 text-sm">
              Autre Nom:{" "}
              <span className="text-black text-sm">{titre_original}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Autheur: <span className="text-black text-sm">{auhor}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Réalisateur: <span className="text-black text-sm">{origine}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Studio d'animation:{" "}
              <span className="text-black text-sm">{studio}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Genre: <span className="text-black text-sm"></span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Type: <span className="text-black text-sm">{format}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Sortie Initiale:{" "}
              <span className="text-black text-sm">{date_diffusion}</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Durée: <span className="text-black text-sm">24 min</span>
            </h2>
            <h2 className="font-medium text-red-500 text-sm">
              Status:{" "}
              <span className="text-black text-sm capitalize">{status}</span>
            </h2>
          </div>
        </div>
        <div className="bg-black w-full font-bold flex border-l-8 border-red-600 h-10 shadow-xl justify-center items-center">
          <h2 className="text-white">Episode: </h2>
        </div>
        {episodes ? (
          <div className="w-full h-auto flex border-2 my-2 flex-col gap-1 p-2">
            {episodes.map((anim) => {
              return (
                <Link to={anim.url+`${id}`} className="justify-between p-2 flex-row flex items-center w-full border-[1px]">
                  <h2 className="text-black font-bold">{titre_alternatif} S{saison}  {anim.episode_} Vostfr</h2>
                  <span className="w-auto h-auto bg-red-500 text-white p-1 font-bold">{anim.date_diff}</span>
                </Link>
              );
            })}
          </div>
        ) : null}
      </article>
    </section>
  );
};

export default SingleView;
