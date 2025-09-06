import React from "react";
import ChatBox from "./_components/ChatBox";

function page() {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 md:p-10 ">
      <div className="w-1/2">
        <ChatBox />
      </div>
      <div className="w-1/2">Map and Trip plan to display</div>
    </div>
  );
}

export default page;
