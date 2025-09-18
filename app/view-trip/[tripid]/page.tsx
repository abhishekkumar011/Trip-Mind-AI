"use client";
import { useConvex } from "convex/react";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useUserContext } from "@/context/UserContext";
import { useTripContext } from "@/context/TripContext";
import Itinerary from "@/app/create-trip/_components/Itinerary";

function page() {
  const { tripid } = useParams();
  const { userDetails } = useUserContext();
  const { setTripDetails } = useTripContext();

  const convex = useConvex();

  useEffect(() => {
    const getATrip = async () => {
      const response = await convex.query(api.tripDetail.getTripById, {
        uid: userDetails?._id,
        tripid: tripid + "",
      });
      setTripDetails(response?.tripDetail);
    };

    if (userDetails?._id) {
      getATrip();
    }

    return () => {
      setTripDetails({
        budget: "",
        destination: "",
        duration: "",
        group_size: "",
        origin: "",
        hotels: [],
        itinerary: [],
      });
    };
  }, [userDetails, tripid]);

  return (
    <div>
      <Itinerary />
    </div>
  );
}

export default page;
