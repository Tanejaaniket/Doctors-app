"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function AddDoctor() {
  const [data, setData] = useState({
    name: "John",
    experience: 5,
    specialization: "Internal medicine",
    fees: {
      online: 499,
      offline: 1900,
    },
    qualifications: "MBBS, MD",
    languages: ["Hindi", "English"],
    availability: "online",
    availabilityLocation: {
      online: "Apollo 24|7 virtual clinic",
      offline: "Hospital xyz",
    },
    cashbackAmount: 50,
    image: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("/api/doctor", data);
      toast.success("Doctor added successfully");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="text-3xl font-bold text-center pb-4">Add data</h1>
        <textarea
          value={JSON.stringify(data, null, 2)}
          onChange={(e) => setData(JSON.parse(e.target.value))}
          className="textarea textarea-info min-h-[40vh] min-w-[40vw] text-lg mb-2"
        ></textarea>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDoctor;
