import Breadcrumb from "./components/Breadcrumb";
import Filters from "./components/Filters";
import Advertisement from "./components/Advertisement";
import { ArrowUpDown, ChevronDown, SlidersVertical } from "lucide-react";
import DoctorsInformation from "./components/DoctorInfoCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="hidden lg:col-span-2 lg:block">
          <Filters />
        </div>

        <div className="col-span-full grid grid-cols-7 lg:col-span-7 lg:ps-5 overflow-y-scroll h-[85vh]">
          <div className="col-span-5">
            <div className="p-4 col-span-1">
              <Breadcrumb />
            </div>
            <div className="px-4 flex gap-4 lg:hidden">
              <button className="btn bg-[#ddf1f8] text-[#106c89] border-[#106c89] rounded-lg">
                Availablity
              </button>
              <button className="btn btn-outline rounded-lg">
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
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
              <DoctorsInformation />
            </div>
          </div>
          <div className="hidden md:col-span-2 md:block">
            <Advertisement />
          </div>
        </div>
      </div>
    </>
  );
}
