"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Hotel } from "./ChatBox";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Wallet } from "lucide-react";

type HotelCardProps = {
  hotel: Hotel;
};

function HotelCard({ hotel }: HotelCardProps) {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: hotel.hotel_name,
            per_page: 1,
            orientation: "landscape",
            client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
          },
        });

        setImgUrl(res?.data?.results[0].urls.small);
      } catch (err) {
        console.error("Error fetching Unsplash image:", err);
      }
    }
    fetchImage();
  }, [hotel]);

  return (
    <div>
      <Image
        src={imgUrl ? imgUrl : "/placeholder.jpg"}
        alt="placeholder"
        width={400}
        height={200}
        className="rounded-t-md object-cover"
      />

      <div className="flex flex-col gap-2 px-3 py-2 shadow-md rounded-b-lg">
        <h2 className="font-medium text-lg leading-tight">
          {hotel.hotel_name}
        </h2>
        <h2 className="text-gray-500 text-sm">{hotel.hotel_address}</h2>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center text-green-600">
            <Wallet size={20} />
            <h4 className="text-sm">{hotel.price_per_night}</h4>
          </div>
          <h4 className="text-yellow-600">✨ {hotel.rating}</h4>
        </div>

        <Link
          href={
            "https://www.google.com/maps/search/?api=1&query=" +
            hotel.hotel_name
          }
          target="_blank"
        >
          <Button
            variant={"outline"}
            className="w-full mt-2 mb-1 cursor-pointer"
          >
            View <ExternalLink />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
