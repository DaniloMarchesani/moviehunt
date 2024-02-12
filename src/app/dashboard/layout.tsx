import { Button } from "@/components/ui/button";
import { Home, LogOut, Search, Settings, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white">
      <nav className="fixed top-0 left-0 bg-transparent h-full p-8 flex flex-col justify-between">
        <ul className="flex flex-col justify-evenly items-center gap-20">
          <Button variant={"ghost"}  size={"icon"}><Link href={"#"}><Home /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"#"}><Search /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"#"}><Star /></Link></Button>
          <Button variant={"default"} size={"icon"}><Link href={"#"}><Settings /></Link></Button>
        </ul>
        <Button variant={"default"} size={"icon"}><Link href={"#"}><LogOut /></Link></Button>
      </nav>
      <div className="ml-32 p-6">
        <h1 className="text-4xl font-bold text-white flex mb-4">
          Movie<span className="text-red-500 flex items-center">Hunt</span>
        </h1>
        {children}
      </div>
    </div>
  );
}

export default layout;
