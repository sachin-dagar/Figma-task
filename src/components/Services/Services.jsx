import React from "react";

import serviceMember1 from "../../assets/service1.jpg";
import serviceMember2 from "../../assets/service2.jpg";
import serviceMember3 from "../../assets/service3.jpg";
import serviceMember4 from "../../assets/service4.jpg";
import serviceMember5 from "../../assets/service5.jpg";

import serviceMember6 from "../../assets/service6.jpg";

import arrowIcon from "../../assets/arrow.jpg";

const serviceMembers = [
  {
    id: 1,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember1,
  },
  {
    id: 2,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember2,
  },
  {
    id: 3,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember3,
  },
  {
    id: 4,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember4,
  },
  {
    id: 5,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember5,
  },
  {
    id: 6,
    name: "Business Services",
    role: "The tiny ship today stiller",
    image: serviceMember6,
  },
];

function Services() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 p-10 text-center">
        <span className="text-3xl font-semibold  text-[#4C4C4C] mb-4 border-b-2 border-[#3F51B5]  inline-block text-center">
          Our Services
        </span>
        <p className=" text-center text-lg  font-normal py-3">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        <div className="flex items-center flex-wrap mb-20">
          {serviceMembers.map((data) => (
            <div className="w-full md:w-1/3 px-2 mb-6">
              <div className="bg-white  shadow ">
                <img className="w-full h-48" src={data.image} alt="Service" />
                <div className="px-3 py-4 flex">
                  <p className=" text-[#3F51B5] font-normal text-2xl leading-6  ">
                    {data.name} <br />
                    <span className="text-[#4C4C4C] text-lg">{data.role}</span>
                  </p>
                  <div className=" flex  gap-[14px] items-center relative left-[17%]">
                    <img
                      src={arrowIcon}
                      alt="Hand Icon"
                      className=" w-[10px] h-4 mb-2 pt-1"
                    />{" "}
                    <p className="text-[#009688] text-lg  pb-[6px]">Readmore</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
}

export default Services;
