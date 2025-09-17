"use client";
import { useUser } from "@clerk/nextjs";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { UserContext } from "@/context/UserContext";
import { TripContext } from "@/context/TripContext";
import React, { useEffect, useState } from "react";
import { TripDetail } from "./create-trip/_components/ChatBox";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUser = useMutation(api.user.createNewUser);
  const [userDetails, setUserDetails] = useState<any>();
  const [tripDetails, setTripDetails] = useState<TripDetail>({
    budget: "",
    destination: "",
    duration: "",
    group_size: "",
    origin: "",
    hotels: [],
    itinerary: [],
  });

  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    if (user) {
      const result = await createUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
      });
      setUserDetails(result);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <TripContext.Provider value={{ tripDetails, setTripDetails }}>
        <div>
          <Header />
          {children}
        </div>
      </TripContext.Provider>
    </UserContext.Provider>
  );
}

export default Provider;
