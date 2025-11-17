export default function MovieCard({ movies }) {
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.titre}</h3>
                    <p>{movie.year}</p>
                    <p>{movie.desciption}</p>
                </div>
            ))}
        </div>
    );
}