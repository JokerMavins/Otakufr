import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../Reducers/filters_reducers";
import axios from "axios";
import { animes_url as url } from "../../Utils/constant";

import {
  FILTER_ANIME,
  LOAD_ANIME,
  UPDATE_FILTER,
  SET_LIGHT
} from "../Actions";
import { useAnimesContext } from "./animes_context";

const initialeState = {
  filtered_animes: [],
  animes_loading: false,
  animes_error: false,
  animes: [],
  single_anime_loading: false,
  single_anime_error: false,
  single_anime: {},
  filter: {
    text: "",
    genre: "",
  },
  light: 'light-theme'
};

const FiltersContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { animes } = useAnimesContext();
  const [state, dispatch] = useReducer(reducer, initialeState);

  useEffect(() => {
    dispatch({ type: LOAD_ANIME, payload: animes });
  }, [animes, state.light]);

  useEffect(() => {
    dispatch({ type: FILTER_ANIME });
  }, [animes, state.filters, state.light]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'genre'){
      value = e.target.textContent
    }
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const setLight = () => {
    if(state.light === 'light-theme'){
      dispatch({ type: SET_LIGHT, payload: 'dark-theme' })
    }else(
      dispatch({ type: SET_LIGHT, payload: 'light-theme' })
    )
    
  }

  return (
    <FiltersContext.Provider value={{ ...state, updateFilters, setLight }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FiltersContext);
};
