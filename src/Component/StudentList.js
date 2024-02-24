import React from "react";
import StudentCard from "./StudentCard";
import AddNew from "./AddNew";

function StudentList() {
  return (
    <div className="flex flex-col basis-2/3">
      <StudentCard />

      <AddNew />
    </div>
  );
}

export default StudentList;
