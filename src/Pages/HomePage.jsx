import React from "react";
import { useGlobalContext } from "../context/GlobalContext";


function getStars(vote) {
    const roundedVote = Math.ceil(vote / 2);
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(i < roundedVote ? "⭐" : "✩");
    }
    return stars.join(" ");
}

export default function Main() {
    const { searchResults = [] } = useGlobalContext();

    return (
        <main className="container py-4 ">

            <section>
                {/* Griglia per le card */}
                <div className="row g-3">
                    {searchResults.map((item) => {
                        const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

                        return (
                            <div key={item.id} className="col-md-4">
                                <div className="card">
                                    <img
                                        src={imageUrl}
                                        alt={item.title || item.name}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title || item.name}</h5>
                                        <p className="card-text">Lingua: {item.original_language}</p>
                                        <p className="card-text">Voti: {item.vote_count}</p>
                                        <p className="card-text">{item.overview}</p>
                                        <div className="card-footer">
                                            <span>{getStars(item.vote_average)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
