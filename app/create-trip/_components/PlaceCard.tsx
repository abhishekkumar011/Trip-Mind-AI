"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Activity } from "./ChatBox";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Clock, ExternalLink, TicketCheck } from "lucide-react";

type ActivityProps = {
  activity: Activity;
};

function PlaceCard({ activity }: ActivityProps) {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: activity.place_name,
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
  }, [activity]);

  return (
    <div className="border rounded-lg shadow-md">
      <div className="h-50 lg:h-35">
        <Image
          src={imgUrl ? imgUrl : "/placeholder.jpg"}
          width={400}
          height={200}
          alt={activity.place_name}
          className="rounded-t-md object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-3 py-2 rounded-b-lg">
        <h2 className="font-semibold text-lg leading-tight">
          {activity.place_name}
        </h2>
        <p className="text-gray-500 line-clamp-2">{activity.place_details}</p>
        <div className="flex items-center gap-1 text-blue-700">
          <TicketCheck size={20} />
          <h4 className="line-clamp-1 text-sm">{activity.ticket_pricing}</h4>
        </div>
        <div className="flex items-center gap-1 text-orange-600">
          <Clock size={20} />
          <h4 className="text-sm">{activity.best_time_to_visit}</h4>
        </div>
        <Link
          href={
            "https://www.google.com/maps/search/?api=1&query=" +
            activity.place_name
          }
          target="_blank"
        >
          <Button
            variant={"outline"}
            className="w-full mt-2 mb-1 cursor-pointer"
          >
            View on Map<ExternalLink />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PlaceCard;
