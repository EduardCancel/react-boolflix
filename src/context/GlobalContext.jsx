import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);


    return (
        <GlobalContext.Provider value={{ query, setQuery, movies, setMovies }}>
            {children}
        </GlobalContext.Provider>
    )
}