import React from "react";
import About from "../../assets/about.png";
import starIcon from "../../assets/star.png";
import MissionIcon from "../../assets/misson.png";
import goalIcon from "../../assets/goalicon.png";

import Frame from "../../assets/frame.png";

const Card = ({ title, icon }) => (
  <div className="w-1/3 flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-solid border-black border-opacity-25">
    <img src={icon} alt={`${title} icon`} className="mb-2 w-8 h-8" />
    <h3 className=" text-3xl font-semibold text-center text-[#009688]">
      {title}
    </h3>
  </div>
);

const AboutComponent = () => {
  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-4xl font-semibold text-[#4C4C4C] mb-4 border-b-2 border-[#3F51B5]  inline-block text-center">
            ABOUT OUR COMPANY
          </span>

          <div className="flex justify-between items-center mb-8">
            <div className="w-1/2 p-4">
              <div className="rounded-lg overflow-hidden">
                <img src={About} alt="Office" />
              </div>
            </div>
            <div className="w-1/2 space-y-4">
              <p className="text-gray-600 mb-8">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government they
                survive as soldiers of fortune to a deluxe apartment in the sky
                moving on up to the east side a family.
              </p>
              <p className="text-gray-600 mb-8">
                The government they survive as soldiers of fortune baby if
                you've ever wondered the east side to a deluxe apartment.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Card title="Vision" icon={starIcon} />
                <Card title="Missions" icon={MissionIcon} />
                <Card title="Goals" icon={goalIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-6 mx-auto"
        style={{
          backgroundImage: `url(${Frame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
        <div className="z-10 relative">
          <h2 className="text-white text-lg md:text-2xl font-semibold mb-4">
            We provide high quality services & innovative<br></br> solutions for
            the reliable growth
          </h2>
          <button className="text-blue-800 bg-white font-bold py-2 px-6 transition-colors rounded">
            GET A QUOTE
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
