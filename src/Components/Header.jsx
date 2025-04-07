import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Header() {
    const { searchText, setSearchText, handleSearch } = useGlobalContext();

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container">

                <a className="navbar-brand" href="/">
                    <img
                        src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                        alt="Logo"
                        style={{ width: "120px" }}
                    />
                </a>

                {/* Barra di ricerca */}
                <form
                    className="d-flex ms-auto w-50"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Cerca un film o una serie"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline-light ms-2">
                        Cerca
                    </button>
                </form>
            </div>
        </header>
    );
}
