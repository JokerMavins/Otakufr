import React from "react";
import {Anime} from "./";
import { useAnimesContext } from "../Services/Contents/animes_context"

const AnimeList = () => {
  const { 
    animes_loading: loading,
    animes_error: error,
    animes: anime
 } = useAnimesContext()

  return (
    <div className="grid grid-cols-3">
      {anime.map((anime)=> {
        <Anime {...anime} keys={anime.id} />
      })}
    </div>
  )
}

export default AnimeList
