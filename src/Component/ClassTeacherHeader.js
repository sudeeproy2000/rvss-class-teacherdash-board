import React from "react";

function ClassTeacherHeader() {
  return (
    <div className="flex flex-row justify-around font-semibold p-4 bg-orange-50">
      <div className="flex flex-row gap-2.5">
        <div className="part1">Class</div>
        <div>:</div>
        <div className="part2">Five</div>
      </div>
      <div className="flex flex-row gap-2.5">
        <div className="part1">Section</div>
        <div>:</div>
        <div className="part2">A</div>
      </div>
      <div className="flex flex-row gap-2.5">
        <div className="part1">Class Teacher Name</div>
        <div>:</div>
        <div className="part2">Satarupa Deb</div>
      </div>
      <div className="cursor-pointer">Logout</div>
    </div>
  );
}

export default ClassTeacherHeader;
