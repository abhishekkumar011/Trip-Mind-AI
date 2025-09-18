import React from "react";
import ChatBox from "./_components/ChatBox";
import Itinerary from "./_components/Itinerary";

function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4 lg:p-10 ">
      <div>
        <ChatBox />
      </div>
      <div className="col-span-2 mt-10 lg:mt-0">
        <Itinerary />
      </div>
    </div>
  );
}

export default Page;
