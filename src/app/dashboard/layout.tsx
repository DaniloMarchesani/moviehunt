import { Button } from "@/components/ui/button";
import { Home, LogOut, Search, Settings, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white text-center text-wrap md:text-start">
      <nav className=" z-10 fixed md:top-0 bottom-0 left-0 md:bg-transparent bg-gray-950/90 md:h-full w-full md:w-max p-6 flex md:flex-col justify-between">
        <ul className="flex md:flex-col md:justify-evenly justify-center items-center md:gap-20 gap-16">
          <Button variant={"default"}  size={"icon"}><Link href={"/dashboard"}><Home /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"/dashboard/searchPage"}><Search /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"#"}><Star /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"#"}><Settings /></Link></Button>
        </ul>
        <Button variant={"default"} size={"icon"}><Link href={"/"}><LogOut /></Link></Button>
      </nav>
      <div className="md:ml-32 p-6">
        <h1 className="text-4xl font-bold text-white flex mb-4  ">
          Movie<span className="text-red-500 flex items-center">Hunt</span>
        </h1>
        {children}
      </div>
    </div>
  );
}

export default layout;
