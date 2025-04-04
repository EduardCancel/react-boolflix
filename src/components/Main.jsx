import { useGlobalContext } from "../context/GlobalContext"

export default function Main() {
    const { searchText, setSearchText, handleSearch, searchResults = [] } = useGlobalContext()

    return (
        <main className="container py-4">
            <header className="mb-4">
                <h1 className="mb-3">Boolflix</h1>
                <form
                    className="d-flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Cerca un film"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Cerca
                    </button>
                </form>
            </header>

            <section>
                {searchResults.length > 0 ? (
                    <div className="row row-cols-1 g-3">
                        {searchResults.map((movie) => (
                            <div key={movie.id} className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">Lingua: {movie.original_language}</p>
                                        <p className="card-text">Voti: {movie.vote_count}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted">Nessun risultato trovato.</p>
                )}
            </section>
        </main>
    );
}
