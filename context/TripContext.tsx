"use client"
import { TripDetail } from "@/app/create-trip/_components/ChatBox";
import React, { createContext, useContext } from "react";

type TripContextType = {
  tripDetails: TripDetail;
  setTripDetails: React.Dispatch<React.SetStateAction<TripDetail>>;
};

export const TripContext = createContext<TripContextType | undefined>(
  undefined
);

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTripContext must be used inside a TripProvider");
  }
  return context;
};
