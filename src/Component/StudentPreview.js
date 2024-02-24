import React, { useState } from "react";

function StudentPreview() {
  const [detail, setDetail] = useState();

  return (
    <>
      <div className="flex flex-wrap justify-center basis-1/3 ">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-auto m-6 overflow-hidden sm:w-auto">
          <img src="./Assets/1.jpg" alt="" className="h-30 m-6" />
          <div className="text-center px-2 pb-5 flex justify-center gap-2.5">
            <h1 className="text-lg">Name</h1>
            <div className="text-lg">:</div>
            <h2 className="text-xl font-bold">Sudeep Roy</h2>
          </div>
          <div className="text-center px-2 pb-5 flex justify-center gap-2.5">
            <div className="text-lg">DOB</div>
            <div className="text-lg">:</div>
            <div className="text-xl font-bold">01/01/2009</div>
          </div>
          <div className="text-center px-2 pb-5 flex justify-center gap-2.5">
            <div className="text-lg">Payment Status</div>
            <div className="text-lg">:</div>
            <div className="text-xl font-bold">Success</div>
          </div>
          <div className="flex justify-around gap-4 p-2">
            <button className="bg-green-600 hover:bg-green-800 p-4 rounded-lg w-full">
              Accept
            </button>
            <button className="bg-red-600 hover:bg-red-800 p-4 rounded-lg w-full">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentPreview;
