"use client";
import Breadcrumb from "./components/Breadcrumb";
import Filters from "./components/Filters";
import Advertisement from "./components/Advertisement";
import { ArrowUpDown, ChevronDown, SlidersVertical } from "lucide-react";
import DoctorsInformation from "./components/DoctorInfoCard";
import CollapsibleFilter from "./components/CollapsibleFilter";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { set } from "mongoose";

export default function Home() {
  const [showCollapsible, setShowCollapsible] = useState(false);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [requestURL, setRequestURL] = useState(``);
  const [filters, setFilters] = useState({});
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`/api/doctor?page=${page}`);
      console.log(res);
      const arr = [];
      arr.push(...doctors);
      arr.push(...res.data.data.docs);
      setDoctors(arr);
      setPaginationInfo(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, [page]);
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="hidden lg:col-span-2 lg:block">
          <Filters />
        </div>

        <div className="col-span-full md:grid md:grid-cols-7 lg:col-span-7 lg:ps-5 overflow-y-scroll h-[85vh] relative">
          <div className="md:col-span-5">
            <div className="p-4 col-span-1">
              <Breadcrumb />
            </div>
            <div className="px-4 flex gap-4 lg:hidden">
              <button className="btn bg-[#ddf1f8] text-[#106c89] border-[#106c89] rounded-lg">
                Availablity
              </button>
              <button
                onClick={() => setShowCollapsible(true)}
                className="btn btn-outline rounded-lg"
              >
                <SlidersVertical /> Filters
              </button>
            </div>
            <div className="block lg:flex lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl font-bold p-3">
                  Consult General Physicians Online - Internal Medicine
                  Specialists
                </h1>
                <p>{/*  //TODO: ADD TOTAL Doctors // */}</p>
              </div>
              <div className="hidden lg:block">
                <button className="btn btn-outline">
                  <ArrowUpDown />
                  Relevance
                  <ChevronDown />
                </button>
              </div>
            </div>
            <div>
              {doctors.map((doctor) => (
                <DoctorsInformation key={doctor._id} doctor={doctor} />
              ))}
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            <Advertisement />
          </div>

          <div className="col-span-full lg:col-span-5 flex items-center justify-center">
            <div className="join">
              <button
                className={
                  paginationInfo.hasPrevPage
                    ? "join-item btn mx-1"
                    : "join-item btn mx-1 btn-disabled"
                }
                onClick={() => setPage(page - 1)}
              >
                <span className="text-black">«</span>
              </button>
              <input
                className="join-item btn btn-square mx-1"
                type="radio"
                name="options"
                aria-label={page}
                checked="checked"
                readOnly
              />
              <input
                className="join-item btn btn-square mx-1"
                type="radio"
                name="options"
                aria-label={page + 1}
                readOnly
              />
              <input
                className="join-item btn btn-square mx-1"
                type="radio"
                name="options"
                aria-label={page + 2}
                readOnly
              />
              <input
                className="join-item btn btn-square mx-1"
                type="radio"
                name="options"
                aria-label={page + 4}
                readOnly
              />
              <button className="join-item btn mx-1 text-gray-300 btn-outline btn-disabled">
                ...
              </button>
              <button
                className={
                  paginationInfo.hasNextPage
                    ? "join-item btn mx-1"
                    : "join-item btn mx-1 btn-disabled"
                }
                onClick={() => setPage(page + 1)}
              >
                <span className="text-black">»</span>
              </button>
            </div>
          </div>
        </div>

        {showCollapsible && (
          <CollapsibleFilter setShowCollapsible={setShowCollapsible} />
        )}
      </div>
    </>
  );
}
