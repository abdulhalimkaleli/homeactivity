import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: [],
  watched: [],
  emin: "developer",
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVİE_TO_WATCHLIST", payload: movie });
  };

  console.log(state);
  return (
    <GlobalContext.Provider
      value={{
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
