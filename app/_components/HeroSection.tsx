"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Globe2, Landmark, Plane, Send } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function HeroSection() {
  const suggestion = [
    {
      title: "Create New Trip",
      icon: <Globe2 className="text-blue-500 w-5" />,
    },
    {
      title: "Inspire me where to go",
      icon: <Plane className="text-green-500 w-5" />,
    },
    {
      title: "Discover Hidden Gems",
      icon: <Landmark className="text-orange-500 w-5" />,
    },
    {
      title: "Adventure Destination",
      icon: <Globe className="text-yellow-500 w-5" />,
    },
  ];

  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
  };

  return (
    <div className="mt-24 flex flex-col items-center justify-center w-full px-4 md:px-0">
      <div className="text-center max-w-2xl space-y-6">
        <h2 className="border border-black/5 text-sm bg-neutral-100 text-gray-800 w-fit mx-auto px-4 py-1 rounded-full">
          ✨ Powered by TripMind
        </h2>

        <h1 className="text-3xl md:text-5xl font-bold">
          Plan Your Perfect <span className="text-primary">Journey</span> with{" "}
          <span className="text-primary">Intelligence.</span>.
        </h1>
        <p className="text-lg text-gray-600 leading-6">
          From flights to hidden gems, TripMind curates every detail so you can
          focus on the adventure.
        </p>

        <div className="border-2 rounded-2xl py-2 relative">
          <Textarea
            className="border-0 resize-none h-28 focus-visible:ring-0 shadow-none"
            placeholder="e.g:- Create a trip for Delhi to Manali ✈️"
          />
          <Button className="cursor-pointer absolute right-2 bottom-2" onClick={onSend}>
            Generata Trip
            <Send />
          </Button>
        </div>

        <div className="flex flex-wrap md:flex-row gap-3 justify-center">
          {suggestion.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center border border-gray-300 rounded-full p-2 w-fit"
            >
              {item.icon}
              <h4 className="text-xs">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
