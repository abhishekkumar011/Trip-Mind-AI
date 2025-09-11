"use client";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EmptyChatBox from "./EmptyChatBox";
import { useMutation } from "convex/react";
import { Loader2, Send } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useUserContext } from "@/context/UserContext";
import { useTripContext } from "@/context/TripContext";

type Message = {
  role: string;
  content: string;
  ui?: string;
};

export type TripDetail = {
  budget: string;
  destination: string;
  duration: string;
  group_size: string;
  origin: string;
  hotels: Hotel[];
  itinerary: Itinerary[];
};

export type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
};

export type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};

export type Itinerary = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
};

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinal, setIsFinal] = useState<boolean>(false);

  const { userDetails, setUserDetails } = useUserContext();
  const { tripDetails, setTripDetails } = useTripContext();

  const saveTripDetail = useMutation(api.tripDetail.createTripDetail);

  const onSend = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    setUserInput("");

    const newMsg: Message = {
      role: "user",
      content: userInput,
    };

    setMessages((prev: Message[]) => [...prev, newMsg]);

    const response = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
      isFinal,
    });

    console.log("TRIP DETS", response.data);

    !isFinal &&
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content: response?.data?.resp,
          ui: response?.data?.ui,
        },
      ]);

    if (isFinal) {
      setTripDetails(response?.data?.trip_plan);
      setIsFinal(false);
      const tripId = uuidv4();

      await saveTripDetail({
        tripId,
        tripDetail: response?.data?.trip_plan,
        uid: userDetails._id,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];

    if (lastMsg.ui === "final") {
      setIsFinal(true);
      setUserInput("Ok Great");
    }
  }, [messages]);

  useEffect(() => {
    if (isFinal && userInput) {
      onSend();
    }
  }, [isFinal]);

  return (
    <div className="flex flex-col h-[81vh]">
      {messages.length === 0 && <EmptyChatBox />}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) =>
          msg.role === "user" ? (
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-200 px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          )
        )}

        {isLoading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-200 px-4 py-2 rounded-lg">
              <Loader2 className="animate-spin" />
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="border-2 rounded-2xl py-2 relative">
          <Textarea
            className="border-0 resize-none h-28 focus-visible:ring-0 shadow-none"
            placeholder="Start typing here..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <Button
            className="cursor-pointer absolute right-2 bottom-2"
            onClick={() => onSend()}
          >
            Generata Trip
            <Send />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
