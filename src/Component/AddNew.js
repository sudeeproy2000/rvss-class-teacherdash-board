import React from "react";

function AddNew() {
  return (
    <div className="flex justify-center gap-5">
      <button className="bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-lg w-auto">
        + Add New Student
      </button>
      <button className="bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-lg w-auto">
        + Student Bulk Upload
      </button>
    </div>
  );
}

export default AddNew;
