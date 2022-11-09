import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAnimesContext } from "../Services/Contents/animes_context";

const Nav = () => {

  let genre = [];

  const {
    animes: anime1,
  } = useAnimesContext();

  anime1.map((anime) => {
    anime.genre.map((item) => {
      genre.push(item);
    });
  });

  let genres = [...new Set(genre)];
  const [dropdown, setDropDown] = useState(false);
  const [value, setValue] = useState(" ")

  return (
    <nav className="flex justify-center place-content-center items-center">
      <ul className="md:flex flex-row text-white gap-x-10 hidden tracking-wider text-lg font-extrabold">
        <li>
          <Link onClick={()=>setDropDown(false)} to="/">Acceuil</Link>
        </li>
        <li>
          <Link onClick={()=>setDropDown(false)} to="/list_anime">Liste d'anime</Link>
        </li>
        <li>
          <Link onClick={()=>setDropDown(false)} to="/en_cours">En Cours</Link>
        </li>
        <li>
          <Link onClick={()=>setDropDown(false)} to="/termine">Terminé</Link>
        </li>
        <li>
          <Link onClick={()=>setDropDown(false)} to="/film">Film</Link>
        </li>
        <li className="flex flex-row items-center justify-center">
          <a type="button" onClick={()=>setDropDown(!dropdown)} id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white text-center inline-flex items-center justify-center cursor-pointer">Genres <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
          {/* Dropdown Menu */}
          <div id="dropdown" className={dropdown ? "absolute top-16 z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" : "hidden"}>
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                {
                  genres.map((item)=>{
                    return (
                      <li >
                        <Link name="categorie" value={value} onClick={()=>{setValue(item) ;setDropDown(false)}} to={`/genre/${item}`} class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</Link>
                      </li>
                    )
                  })
                }
              </ul>
          </div>
        </li>
        <li>
          <Link onClick={()=>setDropDown(false)} to="/staff">Staff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
