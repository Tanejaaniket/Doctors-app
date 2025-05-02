"use client";
import { useState } from "react";

function CollapsibleFilter({setShowCollapsible}) {
  const [selectedOption,setSelectedOption] = useState("mode-of-consult");
  return (
    <div className="z-10 h-screen w-screen absolute bg-base-100 top-0">
      <div className="flex justify-between items-center p-4 border-b-1 border-gray-200 h-[10%]">
        <h1 className="font-bold">Filters</h1>
        <button className="text-[#106c89] font-bold cursor-pointer">
          Clear All
        </button>
      </div>
      <div className="w-full h-[78%] flex">
        <div className="w-1/3 border-e border-gray-200 h-full">
          <button
            onClick={(e) => setSelectedOption("mode-of-consult")}
            className={
              selectedOption === "mode-of-consult"
                ? "text-start ps-3 py-4 text-xs w-full border-b border-gray-200 bg-base-200"
                : "text-start ps-3 py-4 text-xs w-full border-b border-gray-200"
            }
          >
            Mode of Consult
          </button>
          <button
            onClick={() => setSelectedOption("experience")}
            className={
              selectedOption === "experience"
                ? "text-start ps-3 py-4 text-xs w-full border-b border-gray-200 bg-base-200"
                : "text-start ps-3 py-4 text-xs w-full border-b border-gray-200"
            }
          >
            Experience (In Years)
          </button>
          <button
            onClick={() => setSelectedOption("fee")}
            className={
              selectedOption === "fee"
                ? "text-start ps-3 py-4 text-xs w-full border-b border-gray-200 bg-base-200"
                : "text-start ps-3 py-4 text-xs w-full border-b border-gray-200"
            }
          >
            Fee (In Rupees)
          </button>
          <button
            onClick={() => setSelectedOption("language")}
            className={
              selectedOption === "language"
                ? "text-start ps-3 py-4 text-xs w-full border-b border-gray-200 bg-base-200"
                : "text-start ps-3 py-4 text-xs w-full border-b border-gray-200"
            }
          >
            Language
          </button>
          <button
            onClick={() => setSelectedOption("facility")}
            className={
              selectedOption === "facility"
                ? "text-start ps-3 py-4 text-xs w-full border-b border-gray-200 bg-base-200"
                : "text-start ps-3 py-4 text-xs w-full border-b border-gray-200"
            }
          >
            Facility
          </button>
        </div>
        <div className="w-2/3">
          {selectedOption === "mode-of-consult" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Hospital Visit"
                  id=""
                />
                Hospital Visit
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Online Visit"
                  id=""
                />
                Online Visit
              </div>
            </div>
          )}
          {selectedOption === "experience" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="0-5"
                  id=""
                />
                0-5
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="6-10"
                  id=""
                />
                6-10
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="11-16"
                  id=""
                />
                11-16
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="16+"
                  id=""
                />
                16+
              </div>
            </div>
          )}
          {selectedOption === "fee" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="100-500"
                  id=""
                />
                100-500
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="500-1000"
                  id=""
                />
                500-1000
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="1000+"
                  id=""
                />
                1000+
              </div>
            </div>
          )}
          {selectedOption === "language" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="English"
                  id=""
                />
                English
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Hindi"
                  id=""
                />
                Hindi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Telgu"
                  id=""
                />
                Telgu
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Punjabi"
                  id=""
                />
                Punjabi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Bengali"
                  id=""
                />
                Bengali
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Marathi"
                  id=""
                />
                Marathi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Urdu"
                  id=""
                />
                Urdu
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Gujarti"
                  id=""
                />
                Gujarti
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Tamil"
                  id=""
                />
                Tamil
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Kannada"
                  id=""
                />
                Kannada
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Oriya"
                  id=""
                />
                Oriya
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Persian"
                  id=""
                />
                Persian
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Assamese"
                  id=""
                />
                Assamese
              </div>
            </div>
          )}
          {selectedOption === "facility" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Apollo Hospital"
                  id=""
                />
                Apollo Hospital
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  name="Other clinic"
                  id=""
                />
                Other clinic
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around p-4 border-b-1 border-gray-200 h-[10%]">
        <button onClick={() => setShowCollapsible(false)} className="btn text-[#106c89] btn-outline w-[48%] rounded-md">
          Cancel
        </button>
        <button onClick={() => setShowCollapsible(false)} className="btn bg-[#106c89] text-white w-[48%] rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
}

export default CollapsibleFilter;