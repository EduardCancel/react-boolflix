import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function GlobalProvider({ children }) {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.results);
            })
            .catch((error) => {
                console.error("Error fetching search results:", error);
            });
    }

    return (
        <GlobalContext.Provider value={{ searchText, setSearchText, searchResults, handleSearch }}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {

    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
