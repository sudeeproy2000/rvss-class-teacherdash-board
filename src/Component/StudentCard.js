import React from "react";

function StudentCard() {
  return (
    <div className="flex flex-wrap justify-center ">
      {data.map((d) => (
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer hover:border-2 border-rose-600">
          <img src={d.img} alt="" className="h-21 m-6" />

          <h2 className="text-center px-2 pb-5">{d.name}</h2>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    img: `./Assets/1.jpg`,
    name: `Leonardo DiCaprio`,
  },
  {
    img: `./Assets/2.jpg`,
    name: `Will Smith`,
  },
  {
    img: `./Assets/3.jpg`,
    name: `Robert Downey Jr.`,
  },
  {
    img: `./Assets/4.jpg`,
    name: `Britney Spears`,
  },
  {
    img: `./Assets/5.jpg`,
    name: `Eddie Murphy`,
  },
  {
    img: `./Assets/6.jpg`,
    name: `Brad Pitt`,
  },
  {
    img: `./Assets/7.jpg`,
    name: `Beyoncé`,
  },
];

export default StudentCard;
