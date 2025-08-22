import Image from "next/image";
import React from "react";

function CreatePlan() {
  const plan = [
    {
      title: "CHOOSE",
      imgSrc: "/img1.png",
      dets: (
        <>
          Start your adventure by selecting your dream{" "}
          <span className="text-blue-600">destination.</span> Our AI travel
          planner offers a wide range of options tailored to your preferences.
        </>
      ),
    },

    {
      title: "CUSTOMIZE",
      imgSrc: "/img2.png",
      dets: (
        <>
          <span className="text-purple-600">Personalize</span> your itinerary to
          match your interests and needs. Modify activities, accommodations, and
          transportation for a perfect fit.
        </>
      ),
    },

    {
      title: "TRAVEL",
      imgSrc: "/img3.png",
      dets: (
        <>
          Embark on your journey with confidence, knowing every detail has been
          meticulously planned for a seamless{" "}
          <span className="text-green-600">travel</span> experience.
        </>
      ),
    },
  ];
  return (
    <div className="my-30">
      <h2 className="font-medium text-4xl text-center mb-10 tracking-wide">
        Create your <span className="text-primary">Plan</span> within minutes!
      </h2>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-0 my-10 md:my-20 mx-5 md:mx-20">
        {plan.map((item, index) => (
          <div className="flex flex-col items-center gap-15" key={index}>
            <h4 className="text-xl font-medium tracking-widest">
              {item.title}
            </h4>
            <div className="space-y-6 flex flex-col items-center">
              <div className="w-60 h-60 relative">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="max-w-xs md:text-sm text-gray-600 text-center">
                {item.dets}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePlan;
