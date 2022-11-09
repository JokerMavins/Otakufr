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

const anime_reducer = (state, action) => {
    if (action.type === GET_ANIMES_BEGIN) {
        return {...state, animes_loading: true}
    }
    if(action.type === GET_ANIMES_ERROR) {
        return {...state, animes_loading: false, animes_error: true}
    }
    if(action.type === GET_ANIMES_SUCCESS) {
        return {
            ...state, 
            animes_loading: false,
            animes: action.payload,
        };
    }
    if (action.type === GET_SINGLE_ANIME_BEGIN) {
        return {...state, single_anime_loading: true, single_anime_error: false}
    }
    if(action.type === GET_SINGLE_ANIME_ERROR) {
        return {...state, single_anime_loading: false, single_anime_error: true}
    }
    if(action.type === GET_SINGLE_ANIME_SUCCESS) {
        return {
            ...state, 
            single_anime_loading: false,
            single_anime: action.payload,
        };
    }
    throw new Error(`No matching "${action.type}" - action type`);
}

export default anime_reducer;