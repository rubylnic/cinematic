import {
  ADD_TO_FAVS,
  REMOVE_FROM_FAVS,
} from "./types";

const initialState = {
  filmsInFavs: []
}

export const favsReducer = (state = initialState, action) => {
  const film = action.item;
  let { filmsInFavs } = state;
  switch (action.type) {
    case ADD_TO_FAVS:

      film.inFavs = true;

      filmsInFavs.push(film)
      return {
        ...state,
        filmsInFavs: filmsInFavs
      }
    case REMOVE_FROM_FAVS:
      const filmIndex = filmsInFavs.findIndex(item => item.id === film.id
      );
      film.inFavs = false;

      const nextFilmsInFavs = [
        ...filmsInFavs.slice(0, filmIndex),
        ...filmsInFavs.slice(filmIndex + 1)
      ];
      return {
        ...state,
        filmsInFavs: nextFilmsInFavs
      }

    default:
      return state;
  }

}