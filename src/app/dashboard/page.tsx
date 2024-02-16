"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { Heart, Plus } from "lucide-react";

interface IMovie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

async function Dashboard() {
    //FIXAREEEE
    //TODO - fetch movies from the API
    //FIX finire di implementare la funzione fetchMovies
    const [movies, setMovies] = useState<IMovie[]>([]);

    async function fetchMovies(movieName: string) {
        const movies = await axios.get(process.env.API_ENDPOINT || "", {
            params: {
                apikey: process.env.API_KEY,
                s: movieName
            }
        });

        console.log(movies.data)

       return movies.data;
    }

    const allMovies = await fetchMovies("war");
    const movieContainer = [...allMovies.Search];
  return (
    <div className="p-6 text-white">
      {/* COllection of types of movies */}
      <div className="flex justify-start items-center gap-10">
        <Button size={"lg"}>🍿 All</Button>
        <Button size={"lg"} onClick={() => {movieContainer.filter(movie => movie.Type === "movie")}}>🎥 Movie</Button>
        <Button size={"lg"}>🏝️ Series</Button>
        <Button size={"lg"}>😁 Comedy</Button>
        <Button size={"lg"}>🧟 Horror</Button>
        <Button size={"lg"}>🦄 Fantasy</Button>
        <Button size={"lg"}>😢 Drama</Button>
      </div>

      <section id="most-watch">
        <h2 className="text-4xl font-bold mt-20 mb-8">Latest movies</h2>
        <div className="flex gap-4 flex-wrap">
            {
                movieContainer.map( (movie:IMovie ) => (
    
                   <div key={movie.imdbID} className="flex flex-col items-center relative"> 
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block z-10 w-full h-full">
                        <Button><Heart /></Button>
                        <Button><Plus /></Button>
                    </div>
                    <Image src={movie.Poster} alt="movie poster" width={200} height={200} className="rounded-xl cursor-pointer hover:opacity-35">
                    </Image>
                    
                   {/* <p className="text-xl">{movie.Title}</p> */}
                   </div>
                ))
            }
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
