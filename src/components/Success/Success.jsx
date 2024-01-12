import React from "react";
import backgroundImage from "../../assets/mask.png";

function Success() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#97a9d0",
      }}
      className="text-white text-center py-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-normal mb-3">Company Success</h2>
        <p className="text-5xl font-normal leading-16 tracking-wide text-center">
          Some fun facts about our consulting
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6">
          <div className="m-4">
            <span className=" font-light text-5xl">30+</span>
            <p className="font-normal text-xl my-3">Years of Excellence</p>
          </div>
          <div className="m-4">
            <span className="font-light text-5xl">100%</span>
            <p className="font-normal text-xl my-3">Client Satisfaction</p>
          </div>
          <div className="m-4">
            <span className="font-light text-5xl">53K</span>
            <p className="font-normal text-xl my-3">Cases Completed</p>
          </div>
          <div className="m-4">
            <span className="font-light text-5xl">24</span>
            <p className="font-normal text-xl my-3">Consultants</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
