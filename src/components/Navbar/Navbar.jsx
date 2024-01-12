import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto  flex justify-between items-center ">
        <a className="font-bold text-2xl leading-4 " href="#">
          <h1 className="text-black	">
            Business <span className=" text-[#009688]">Point</span>
          </h1>
          <span className=" text-xs  SMALLCASW">
            best tips for digital marketers
          </span>
        </a>
        <div className="block lg:hidden">Menu Icon</div>
        <div className="hidden lg:block">
          <ul className="inline-flex">
            <li
              className=" border-r border-[#E5E5E5] py-7 p-5 hover:text-gray-800 hover:bg-blue-500 ;
] "
            >
              <a href="#">Home</a>
            </li>
            <li className="p-5 py-7 hover:text-gray-800 hover:bg-blue-500 border-r border-[#E5E5E5] ">
              <a href="#">About</a>
            </li>
            <li className="p-5 py-7 hover:text-gray-800 hover:bg-blue-500  border-r border-[#E5E5E5]">
              <a href="#">Services</a>
            </li>
            <li className="p-5 py-7 hover:text-gray-800 hover:bg-blue-500  border-r border-[#E5E5E5] ">
              <a href="#">Team</a>
            </li>
            <li className="p-5 py-7 hover:text-gray-800 hover:bg-blue-500 border-r border-[#E5E5E5] ">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
