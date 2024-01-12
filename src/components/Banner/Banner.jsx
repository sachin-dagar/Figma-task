import React from "react";
import bannerImage from "../../assets/bnr.jpg";
import handIcon from "../../assets/hand.png";
import speakerIcon from "../../assets/speaker.png";
import goalIcon from "../../assets/goal.jpg";

function Banner() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[450px] text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="md:w-1/2">
          <p className="text-5xl  font-light text-[#FAFAFA] mb-2">
            WE IMPROVE YOUR
          </p>
          <p className="text-5xl   font-extrabold mb-3">SALES EFFICIENCY</p>
          <p className="text-2xl font-normal w-[75%]  mb-5 leading-none">
            The government they survive artical of fortune
          </p>
          <a
            href="#"
            className="bg-white py-4 px-8 text-black font-normal uppercase text-sm rounded hover:bg-blue-500 "
          >
            Contact us
          </a>
        </div>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between space-x-4">
        <div className="w-1/3 bg-white shadow-md p-4 rounded-lg flex flex-col justify-between border-b-4 border-[#009688]">
          <div className="flex flex-col items-center mb-4">
            <img src={handIcon} alt="Hand Icon" className="h-8 w-8 mb-2" />{" "}
         
            <h2 className="text-lg font-semibold text-center  border-b-2 border-[#4C4C4C]">
              Consumer Insights
            </h2>
          </div>
          <p className="text-gray-600  w-[182px] text-center m-auto">
            The east side to a deluxe apartment in mov e on up to the east side
          </p>
        </div>

        <div className="w-1/3 bg-white shadow-md p-4 rounded-lg flex flex-col justify-between border-b-4 border-[#009688]">
          <div className="flex flex-col items-center mb-4">
            <img src={speakerIcon} alt="Hand Icon" className="h-8 w-8 mb-2" />{" "}
       
            <h2 className="text-lg font-semibold text-center  border-b-2 border-[#4C4C4C]">
              Emerging Ideas
            </h2>
          </div>
          <p className="text-gray-600  w-[182px] text-center m-auto">
            The east side to a deluxe apartment in mov e on up to the east side
          </p>
        </div>

        <div className="w-1/3 bg-white shadow-md p-4 rounded-lg flex flex-col justify-between border-b-4 border-[#009688]">
          <div className="flex flex-col items-center mb-4">
            <img src={goalIcon} alt="Hand Icon" className="h-8 w-8 mb-2" />{" "}
          
            <h2 className="text-lg font-semibold text-center  border-b-2 border-[#4C4C4C]">
              Marketing Goals
            </h2>
          </div>
          <p className="text-gray-600 w-[182px] text-center m-auto">
            The east side to a deluxe apartment in mov e on up to the east side
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
