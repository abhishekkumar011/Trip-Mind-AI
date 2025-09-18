"use client";
import Link from "next/link";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import MyTripCard from "./_components/MyTripCard";
import React, { useEffect, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { TripDetail } from "../create-trip/_components/ChatBox";

export type Trip = {
  tripId: String;
  tripDetail: TripDetail;
  _id: String;
};

function Page() {
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const convex = useConvex();

  const { userDetails } = useUserContext();

  useEffect(() => {
    if (!userDetails?._id) return;

    const getUserTrips = async () => {
      const response = await convex.query(api.tripDetail.getUserTrips, {
        uid: userDetails?._id,
      });
      setMyTrips(response);
    };
    getUserTrips();
  }, [userDetails]);

  return (
    <div className="py-10 px-5 md:px-20">
      <div>
        <h1 className="text-3xl font-semibold">My Trips</h1>
      </div>

      {myTrips.length === 0 && (
        <div className="mt-5 text-center">
          <h2 className="mb-2 text-xl ">
            You don't have any trip plan created
          </h2>
          <Link href={"/create-trip"}>
            <Button>Create Trip</Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {myTrips.map((trip, index) => (
          <MyTripCard trip={trip} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Page;
