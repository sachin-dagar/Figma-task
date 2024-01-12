import React from "react";
import bannerImage from "../../assets/bnr.jpg";
import handIcon from "../../assets/hand.png";
import speakerIcon from "../../assets/speaker.png";
import goalIcon from "../../assets/goal.jpg";

function Banner() {
  return (
    <>
      <div
        className="bg-cover  h-[523px] text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="88"
          viewBox="0 0 1440 88"
          fill="none"
          className="absolute bottom-0 left-0 w-full top-[518px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L60 15C120 29 240 59 360 73C480 88 600 88 720 81C840 73 960 59 1080 59C1200 59 1320 73 1380 81L1440 88H1380C1320 88 1200 88 1080 88C960 88 840 88 720 88C600 88 480 88 360 88C240 88 120 88 60 88H0V0Z"
            fill="#FAFAFA"
          />
        </svg>
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
      <div className="bg-[#FAFAFA] p-4 flex justify-between pt-14 space-x-4">
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
