import React from "react";
import {Actuality} from "../../Components";
import {Genre, Home, Staff, Termine, Film, AnimeList, Encours, SingleView, MovieView} from "../../Pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnimesContext } from "../../Services/Contents/animes_context";

const index = () => {
  return (
    <main className="min-w-full min-h-screen justify-center flex">
      <section className="container grid grid-cols-6 mt-14">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staff" element={<Staff />} />
          <Route exact path="/termine" element={<Termine />} />
          <Route exact path="/genre/:id" element={<Genre />} />
          <Route exact path="/film" element={<Film />} />
          <Route exact path="/list_anime" element={<AnimeList />} />
          <Route exact path="/en_cours" element={<Encours />} />
          <Route exact path="/anime/:id" element={<SingleView />} />
          <Route exact path="/anime_/:id" element={<MovieView />} />
        </Routes>
        <Actuality  />
      </section>
    </main>
  );
};

export default index;
