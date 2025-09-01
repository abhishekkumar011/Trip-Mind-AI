import Image from "next/image";
import React from "react";

function EmptyChatBox() {
  return (
    <div className="mt-7">
      <div className="flex justify-center mb-10">
        <div
          className="size-32 animate-gradient-shift rounded-full 
             bg-[linear-gradient(135deg,_rgb(172,246,234),_rgb(211,248,180),_rgb(181,230,250),_rgb(212,202,255),_rgb(255,203,198),_rgb(255,140,142),_rgb(255,226,158),_rgb(172,246,234))] 
             bg-[length:400%_400%]"
        ></div>

        <Image
          className="absolute"
          src={"/liberty.webp"}
          alt=""
          width={200}
          height={100}
        />
      </div>

      <h2 className="text-center font-bold text-3xl">
        Start planning your <span className="text-primary">Trip</span> with AI
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-xl mx-auto">
        Discover personalized travel itineraries, find the best destinations,
        and plan your dream vacation effortlessly with the power of A.I. Let our
        smart assistant do the hard work while you enjoy the journey.
      </p>
    </div>
  );
}

export default EmptyChatBox;
