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

    return "🏳️"; // bandiera bianca se non troviamo niente
}

export default function Main() {
    const { searchText, setSearchText, handleSearch, searchResults = [] } = useGlobalContext();

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
                {searchResults.length > 0 ? (
                    <ul className="list-group">
                        {searchResults.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>
                                    <strong>{item.title}</strong> <br />
                                    Lingua: {getFlagEmoji(item.original_language)} | Voti: {item.vote_count}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">Nessun risultato trovato.</p>
                )}
            </section>
        </main>
    );
}
