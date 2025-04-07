import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function GlobalProvider({ children }) {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
        const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`;

        // Primo fetch per i film
        fetch(movieUrl)
            .then((res) => res.json())
            .then((movieData) => {
                const movies = movieData.results.map((item) => ({
                    id: item.id,
                    title: item.title,
                    original_language: item.original_language,
                    vote_count: item.vote_count,
                    overview: item.overview,
                    poster_path: item.poster_path,
                }));

                // Secondo fetch per le serie TV
                fetch(tvUrl)
                    .then((res) => res.json())
                    .then((tvData) => {
                        const tvShows = tvData.results.map((item) => ({
                            id: item.id,
                            title: item.name,
                            original_language: item.original_language,
                            vote_count: item.vote_count,
                            overview: item.overview,
                            poster_path: item.poster_path,
                        }));

                        setSearchResults([...movies, ...tvShows]);
                    })
                    .catch((error) => {
                        console.error("Errore nel fetch delle serie TV:", error);
                    });
            })
            .catch((error) => {
                console.error("Errore nel fetch dei film:", error);
            });
    };

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
