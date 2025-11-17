import {useState} from 'react'
import './App.css'
import Hello from "./Hello.jsx";
import MovieCard from "./movieCard.jsx";

export default function App() {
    const movies = [
        {id: 1, titre: "Le seigneur des anneaux", year: 2000, posterUrl: "/img/seigneurdesAnneaux.jpg", desciption: "bien"},
        {id: 2, titre: "Star Wars", year: 2005, posterUrl: "/img/starwars.jpg", desciption: "cool"},
        {id: 3, titre: "The Dark Knight", year: 2020, posterUrl: "/img/batman.jpg", desciption: "pas bien"},
        {id: 4, titre: "Avengers", year: 2025, posterUrl: "/img/avengers.jpg", desciption: "nul"},
        {id: 5, titre: "Spider-Man", year: 2059, posterUrl: "/img/spiderman.jpg", desciption: "bien"},
        {id: 6, titre: "SuperMan", year: 2007, posterUrl: "/img/superman.jpg", desciption: "tres bien"},
    ];

    return(
    <div>
    <h1>Hello there!</h1>
    <Hello name='Star Wars!' />
    <Hello name='Inception' />
    <MovieCard movies={movies} />
    </div>

);
}





