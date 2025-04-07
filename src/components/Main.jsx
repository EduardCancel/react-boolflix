import { useGlobalContext } from "../context/GlobalContext";

function getFlagEmoji(langCode) {
    if (langCode === "en") return "🇺🇸";
    if (langCode === "it") return "🇮🇹";
    if (langCode === "fr") return "🇫🇷";
    if (langCode === "es") return "🇪🇸";
    if (langCode === "ja") return "🇯🇵";
    if (langCode === "ko") return "🇰🇷";
    if (langCode === "zh") return "🇨🇳";
    if (langCode === "de") return "🇩🇪";
    return "🏳️";
}

function getStars(vote) {
    const roundedVote = Math.ceil(vote / 2);
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(i < roundedVote ? "⭐" : "✩");
    }
    return stars.join(" ");
}

export default function Main() {
    const { searchText, setSearchText, handleSearch, searchResults = [] } = useGlobalContext();

    const imageUrlBase = "https://image.tmdb.org/t/p/w500";

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
                        placeholder="Cerca un film o una serie"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Cerca
                    </button>
                </form>
            </header>

            <section>
                <ul className="list-group">
                    {searchResults.map((item) => {
                        const imageUrl = item.poster_path ? `${imageUrlBase}${item.poster_path}` : null;

                        return (
                            <li key={item.id} className="list-group-item d-flex align-items-center">
                                {/* Colonna per l'immagine */}
                                <div className="me-3">
                                    {imageUrl && (
                                        <img
                                            src={imageUrl}
                                            alt={item.title || item.name}
                                            className="img-fluid rounded"
                                            style={{ width: "100px" }}
                                        />
                                    )}
                                </div>

                                {/* Colonna per il testo e informazioni */}
                                <div className="flex-grow-1">
                                    <strong>{item.title || item.name}</strong> <br />
                                    Lingua: {getFlagEmoji(item.original_language)} | Voti: {item.vote_count}
                                </div>

                                {/* Colonna per le stelle */}
                                <div className="ms-3">
                                    <span>{getStars(item.vote_average)}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
