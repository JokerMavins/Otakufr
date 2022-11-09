import React, {useEffect, useContext, useReducer} from 'react';
import reducer from '../Reducers/animes_reducers';
import axios from 'axios';
import {animes_url as url} from '../../Utils/constant';

import {
    GET_ANIMES_BEGIN,
    GET_ANIMES_SUCCESS,
    GET_ANIMES_ERROR,
    GET_SINGLE_ANIME_BEGIN,
    GET_SINGLE_ANIME_ERROR,
    GET_SINGLE_ANIME_SUCCESS,
    FILTER_ANIME,
    LOAD_ANIME,
} from "../Actions";

const initialeState = {
    animes_loading: false,
    animes_error: false,
    animes:[],
    single_anime_loading: false,
    single_anime_error: false,
    single_anime: {},
}

const AnimesContext = React.createContext()

export const AnimeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialeState)

    const fetchAnimes = async(url) => {
        dispatch({ type: GET_ANIMES_BEGIN })
        try{
            const response = await axios.get(url)
            const animes = response.data
            dispatch({ type: GET_ANIMES_SUCCESS, payload: animes })
        }catch(e){
            dispatch({ type: GET_ANIMES_ERROR })
        }
    }

    const fetchSingleAnimes = async(url) => {
        dispatch({ type: GET_SINGLE_ANIME_BEGIN })
        try{
            const response = await axios.get(url)
            const animes = response.data
            dispatch({ type: GET_SINGLE_ANIME_SUCCESS , payload: animes })
        }catch(e){
            dispatch({ type: GET_SINGLE_ANIME_ERROR  })
        }
    }

    useEffect(()=> {
        fetchAnimes(url)
    }, [])

    return(
        <AnimesContext.Provider value={{...state , fetchAnimes, fetchSingleAnimes}}>
            {children}
        </AnimesContext.Provider>
    )
}

export const useAnimesContext = () => {
    return useContext(AnimesContext)
}