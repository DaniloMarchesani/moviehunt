"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { ArrowBigLeft, Car, Heart, Plus } from "lucide-react";
import { access } from "fs";
import MovieCard from "@/components/common/MovieCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

async function fetchMovies(searchParam: string = "batman") {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      s: searchParam,
      apikey: "517cfddb",
    },
  });
  console.log(response.data.Search);
  return response.data.Search;
}

function Dashboard() {
  //FIXAREEEE
  //TODO - fetch movies from the API
  //FIX finire di implementare la funzione fetchMovies
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [mostViewed, setMostViewed] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));

    fetchMovies("most viewed")
      .then((movies) => setMostViewed(movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 text-white">
      {/* COllection of types of movies */}
      <div className="flex flex-wrap md:justify-start justify-around items-center gap-10">
        <Button size={"lg"}>🍿 All</Button>
        <Button size={"lg"}>🎥 Movie</Button>
        <Button size={"lg"}>🏝️ Series</Button>
        <Button size={"lg"}>😁 Comedy</Button>
        <Button size={"lg"}>🧟 Horror</Button>
        <Button size={"lg"}>🦄 Fantasy</Button>
        <Button size={"lg"}>😢 Drama</Button>
      </div>

      <section id="most-watch">
        <div id="carousel-hero" className="">
          <h2 className="text-4xl font-bold mt-20 mb-8">Most watched</h2>
          <Carousel
            className="w-2/3 z-10 mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="text-center">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 1
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 2
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 3
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 1
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 2
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 3
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 1
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 2
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                item 3
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant={"default"} />
            <CarouselNext variant={"default"}/>
          </Carousel>
        </div>

        <h2 className="text-4xl font-bold mt-20 mb-8">Latest movies</h2>
        <div className="flex gap-4 flex-wrap">
          {movies.length !== 0
            ? movies.map((movie: IMovie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : "Loading..."}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
