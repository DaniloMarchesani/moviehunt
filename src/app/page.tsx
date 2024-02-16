import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-950">
     <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold text-white flex mb-4">Movie<span className="text-red-500 flex items-center">Hunt</span></h1>
        <h3 className="text-2xl text-white">Your favourite movies, in all one place!</h3>
     </div>
      <div className="flex gap-3 drop-shadow-md mt-10">
        <Button variant={"destructive"} size={"lg"}><Link href={"/dashboard"}>Get Started</Link></Button>
        <Button variant={"secondary"} size={"lg"}><Link href={"#"}>Know more</Link></Button>
      </div>
     {/*  <div className="absolute top-0 left-0 -z-10 overflow-hidden">
        <video autoPlay muted loop className="min-h-screen">
          <source src="/video-cinema.mp4" type="video/mp4" />
        </video>
      </div> */}
    </main>
  );
}
