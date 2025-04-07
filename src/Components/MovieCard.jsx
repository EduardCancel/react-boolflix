import React from "react";

export default function MovieCard({ item }) {
    const imageUrl = `https://image.tmdb.org/t/p/w342${item.poster_path}`;

    return (
        <div className="card">
            <img src={imageUrl} alt={item.title || item.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.title || item.name}</h5>
                <p className="card-text">Lingua: {item.original_language}</p>
                <p className="card-text">Voti: {item.vote_count}</p>
                <p className="card-text">Overview: {item.overview}</p>
            </div>
        </div>
    );
}
