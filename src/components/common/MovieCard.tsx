"use client";

import { IMovie } from "@/app/dashboard/page";
import React from "react";
import { Button } from "../ui/button";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

function MovieCard({ movie }: { movie: IMovie }) {

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div key={movie.imdbID} className="flex flex-col items-center relative" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)
    }>
      
      <Image
        src={movie.Poster}
        alt="movie poster"
        width={200}
        height={200}
        /* className="rounded-xl cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out" */
        className={clsx("rounded-xl cursor-pointer hover:opacity-10 transition-all duration-300 ease-in-out", isHovered && "opacity-50")}
      ></Image>

      { isHovered && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 w-full h-full p-4">
        <p className="text-lg">{movie.Title}</p>
        <Button variant={"destructive"}>
          <Heart />
          Like it
        </Button>
        <Button>
          <Plus />
          More...
        </Button>
      </div>}

      {/* <p className="text-xl">{movie.Title}</p> */}
    </div>
  );
}

export default MovieCard;
