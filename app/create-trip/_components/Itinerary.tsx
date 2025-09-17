"use client";
import React from "react";
import Image from "next/image";
import PlaceCard from "./PlaceCard";
import HotelCard from "./HotelCard";
import { Timeline } from "@/components/ui/timeline";
import { useTripContext } from "@/context/TripContext";

function Itinerary() {
  const { tripDetails } = useTripContext();

  const data = [
    {
      title: "Hotels",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {tripDetails.hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      ),
    },

    ...tripDetails.itinerary.map((dayData, index) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {dayData.activities.map((activity, index) => (
            <PlaceCard key={index} activity={activity} />
          ))}
        </div>
      ),
    })),
  ];

  return (
    <div className="relative w-full h-[81vh] overflow-y-auto">
      {tripDetails && tripDetails.itinerary?.length > 0 ? (
        <Timeline data={data} tripData={tripDetails} />
      ) : (
        <div className="flex items-center justify-center">
          <Image
            src={"/travel.jpg"}
            width={850}
            height={100}
            alt="travel"
            className="rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export default Itinerary;
