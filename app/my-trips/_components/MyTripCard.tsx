"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Trip } from "../page";
import React, { useEffect, useState } from "react";

type TripProps = {
  trip: Trip;
};

function MyTripCard({ trip }: TripProps) {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: trip.tripDetail.destination,
            per_page: 1,
            orientation: "landscape",
            client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
          },
        });

        setImgUrl(res.data.results[0].urls.small);
      } catch (err) {
        console.error("Error fetching Unsplash image:", err);
      }
    }
    fetchImage();
  }, [trip]);

  return (
    <Link
      href={"/view-trip/" + trip.tripId}
      className="shadow-md rounded-xl border"
    >
      <div className="h-50 overflow-hidden">
        <Image
          src={imgUrl ? imgUrl : "/placeholder.jpg"}
          width={400}
          height={100}
          alt="image"
          className="rounded-b-2xl rounded-t-xl object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <h2 className="flex items-center gap-2 font-medium text-xl text-gray-800">
          {trip.tripDetail.origin} - ✈️ - {trip?.tripDetail?.destination}
        </h2>
        <h4 className="text-sm text-gray-500">
          {trip.tripDetail.duration} Trip with {trip.tripDetail.budget} Budget
        </h4>
      </div>
    </Link>
  );
}

export default MyTripCard;
