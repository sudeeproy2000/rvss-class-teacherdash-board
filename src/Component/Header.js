import React, { useState } from "react";
import Picture from "./Picture";

function Header() {
  return (
    <div className="flex flex-row justify-around bg-yellow-200">
      <img className="w-44" src="./Assets/rvssLogo.png" />
      <div className="flex flex-row gap-8 text-xl mt-6 font-bold">
        <div className="">
          <Picture />
        </div>
        <div>School Name</div>
        <div>Time</div>
      </div>
    </div>
  );
}

export default Header;
