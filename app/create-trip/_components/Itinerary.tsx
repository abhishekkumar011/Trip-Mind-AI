import { Timeline } from "@/components/ui/timeline";
import React from "react";
import HotelCard from "./HotelCard";
import PlaceCard from "./PlaceCard";

const tripData = {
  budget: "Medium",
  destination: "New York",
  duration: "3 days",
  group_size: "Couple",
  hotels: [
    {
      description:
        "Modern hotel located in the heart of Times Square, perfect for couples.",
      geo_coordinates: {
        latitude: 40.7563,
        longitude: -73.9865,
      },
      hotel_address: "212 W 42nd St, New York, NY 10036, USA",
      hotel_image_url: "https://example.com/westin_times_square.jpg",
      hotel_name: "The Westin New York at Times Square",
      price_per_night: "$200",
      rating: 4.2,
    },
    {
      description:
        "Stylish hotel with exceptional views, located close to Broadway shows.",
      geo_coordinates: {
        latitude: 40.7558,
        longitude: -73.9872,
      },
      hotel_address: "135 W 45th St, New York, NY 10036, USA",
      hotel_image_url: "https://example.com/hyatt_centric.jpg",
      hotel_name: "Hyatt Centric Times Square New York",
      price_per_night: "$220",
      rating: 4.5,
    },
    {
      description: "Chic and vibrant, offers a lively local experience.",
      geo_coordinates: {
        latitude: 40.7204,
        longitude: -73.9847,
      },
      hotel_address: "171 Ludlow St, New York, NY 10002, USA",
      hotel_image_url: "https://example.com/indigo_lower_east.jpg",
      hotel_name: "Hotel Indigo Lower East Side New York",
      price_per_night: "$180",
      rating: 4.4,
    },
  ],
  itinerary: [
    {
      activities: [
        {
          best_time_to_visit: "Evening",
          geo_coordinates: {
            latitude: 40.758,
            longitude: -73.9855,
          },
          place_address: "Manhattan, NY 10036, USA",
          place_details:
            "Famous entertainment center in NYC known for its bright lights and Broadway theaters.",
          place_image_url: "https://example.com/times_square.jpg",
          place_name: "Times Square",
          ticket_pricing: "Free",
          time_travel_each_location: "N/A",
        },
        {
          best_time_to_visit: "Morning",
          geo_coordinates: {
            latitude: 40.7851,
            longitude: -73.9683,
          },
          place_address: "New York, NY 10024, USA",
          place_details:
            "Large public park in NY, ideal for a romantic stroll.",
          place_image_url: "https://example.com/central_park.jpg",
          place_name: "Central Park",
          ticket_pricing: "Free",
          time_travel_each_location: "15 minutes from Times Square",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 1,
      day_plan: "Explore Times Square and Central Park.",
    },
    {
      activities: [
        {
          best_time_to_visit: "3 PM",
          geo_coordinates: {
            latitude: 40.7794,
            longitude: -73.9632,
          },
          place_address: "1000 5th Ave, New York, NY 10028, USA",
          place_details:
            "One of the largest and finest art museums in the world.",
          place_image_url: "https://example.com/met_museum.jpg",
          place_name: "The Metropolitan Museum of Art",
          ticket_pricing: "$25 (adult)",
          time_travel_each_location: "20 minutes from Central Park",
        },
        {
          best_time_to_visit: "Afternoon",
          geo_coordinates: {
            latitude: 40.7756,
            longitude: -73.9654,
          },
          place_address: "5th Ave, New York, NY 10022, USA",
          place_details:
            "Famous shopping street in Manhattan with luxury boutiques.",
          place_image_url: "https://example.com/5th_avenue.jpg",
          place_name: "5th Avenue",
          ticket_pricing: "Free to visit",
          time_travel_each_location: "10 minutes from The Met",
        },
      ],
      best_time_to_visit_day: "Afternoon",
      day: 2,
      day_plan: "Visit The Metropolitan Museum of Art and 5th Avenue Shopping.",
    },
    {
      activities: [
        {
          best_time_to_visit: "Late afternoon",
          geo_coordinates: {
            latitude: 40.7061,
            longitude: -73.9969,
          },
          place_address: "New York, NY 10038, USA",
          place_details: "Iconic bridge offering amazing views of Manhattan.",
          place_image_url: "https://example.com/brooklyn_bridge.jpg",
          place_name: "Brooklyn Bridge",
          ticket_pricing: "Free",
          time_travel_each_location: "30 minutes from Midtown Manhattan",
        },
        {
          best_time_to_visit: "7 PM",
          geo_coordinates: {
            latitude: 40.7033,
            longitude: -74.0166,
          },
          place_address: "Pier 36, New York, NY 10034, USA",
          place_details:
            "Enjoy the views of the skyline and Statue of Liberty as the sun sets.",
          place_image_url: "https://example.com/sunset_cruise.jpg",
          place_name: "Sunset Cruise",
          ticket_pricing: "$50 per person",
          time_travel_each_location: "20 minutes from Brooklyn Bridge",
        },
      ],
      best_time_to_visit_day: "Evening",
      day: 3,
      day_plan: "Explore Brooklyn and go on a Sunset Cruise.",
    },
  ],
  origin: "Delhi",
};

function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tripData.hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      ),
    },
    ...tripData.itinerary.map((dayData, index) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {dayData.activities.map((activity, index) => (
            <PlaceCard key={index} activity={activity} />
          ))}
        </div>
      ),
    })),
  ];

  return (
    <div className="relative w-full h-[81vh] overflow-y-auto">
      <Timeline data={data} tripData={tripData} />
    </div>
  );
}

export default Itinerary;
