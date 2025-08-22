import Image from "next/image";
import React from "react";

function WonderFulPlaceList() {
  const data = [
    {
      name: "Delhi, India",
      famousFor: "Heritage & Street Food",
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Mumbai, Maharashtra",
      famousFor: "Bollywood & Gateway of India",
      src: "https://images.unsplash.com/photo-1646327537880-962a5276e4bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Jaipur, Rajasthan",
      famousFor: "Palaces & Pink City Charm",
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Goa, India",
      famousFor: "Beaches & Nightlife",
      src: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Paris, France",
      famousFor: "Explore city of Lights - Eiffel Tower",
      src: "https://images.unsplash.com/photo-1571599070374-527d90899d06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "New York, USA",
      famousFor: "Times Square & Statue of Liberty",
      src: "https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tokyo, Japan",
      famousFor: "Technology & Cherry Blossoms",
      src: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dubai, UAE",
      famousFor: "Luxury & Burj Khalifa",
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="my-10 mx-5 md:mx-20 tracking-wider">
      <h2 className="text-center text-4xl font-medium">
        Explore <span className="text-primary">Wonderful</span> Place
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 md:mt-20">
        {data.map((item, index) => (
          <div
            className="h-70 rounded-2xl space-y-2 shadow-lg border-2"
            key={index}
          >
            <div className="relative h-3/4 w-full">
              <Image
                src={item.src}
                alt="Dubai"
                fill
                className="object-cover rounded-b-3xl rounded-t-2xl"
              />
            </div>

            <div className="space-y-1 mb-10 pl-4">
              <h4 className="text-gray-800">{item.name}</h4>
              <p className="text-xs text-gray-600">{item.famousFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WonderFulPlaceList;
