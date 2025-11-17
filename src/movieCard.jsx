export default function MovieCard({ movies }) {
    return (
        <div className="movieCards">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.titre}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.posterUrl} alt={movie.titre} />
                    <p>{movie.desciption}</p>
                </div>
            ))}
        </div>
    );
}