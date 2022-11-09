import {
    UPDATE_FILTER,
    UPDATE_SORT,
    FILTER_ANIME,
    CLEAR_FILTERS,
    LOAD_ANIME,
    SET_LIGHT
  } from "../Actions";

  const filter_reducer = (state, action) => {
    if (action.type === LOAD_ANIME) {
        return {
          ...state,
          animes: [...action.payload],
          filtered_animes: [...action.payload],
          filters: { ...state.filters},
        };
    }
    if (action.type === UPDATE_FILTER) {
        const { name, value } = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } };
      }

    if(action.type === SET_LIGHT) {
      localStorage.setItem('light', action.payload)
      return { ...state, light: action.payload}
    }

    if (action.type === FILTER_ANIME) {
        const { animes } = state;
        const {text} = state.filters;
    
        let tempAnimes = [...animes]
        
        if(text){
          tempAnimes = tempAnimes.filter((anime) => {
            return anime.titre_alternatif.toLowerCase().startsWith(text)
          })
        }
        return { ...state, filtered_animes: tempAnimes};
    }
    throw new Error(`No matching "${action.type}" - action type`);
}

export default filter_reducer;