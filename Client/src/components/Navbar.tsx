import React from "react";

const Navbar = () => {
  return (
    <div className="h-[75px] w-full flex justify-between">
      <div className="text-3xl font-bold text-[#D6D2D2] ">TypeDev</div>
      <div>
        <ul className="flex gap-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
