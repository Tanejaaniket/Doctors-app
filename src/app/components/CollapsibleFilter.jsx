"use client";
import { useState } from "react";


function CollapsibleFilter({setShowCollapsible,requestURL,setRequestURL,filters,setFilters}) {
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
                  checked={filters.includes("Hospital Visit")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(
                        requestURL + "&mode-of-consult=hospital-visit"
                      );
                      setFilters([...filters, "Hospital Visit"]);
                    } else {
                      setRequestURL(
                        requestURL.replace(
                          "&mode-of-consult=hospital-visit",
                          ""
                        )
                      );
                      setFilters(filters.filter((f) => f !== "Hospital Visit"));
                    }
                  }}
                />
                Hospital Visit
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Online Consult")}
                  name="Online Consult"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(
                        requestURL + "&mode-of-consult=online-consult"
                      );
                      setFilters([...filters, "Online Consult"]);
                    } else {
                      setRequestURL(
                        requestURL.replace(
                          "&mode-of-consult=online-consult",
                          ""
                        )
                      );
                      setFilters(filters.filter((f) => f !== "Online Consult"));
                    }
                  }}
                />
                Online Consult
              </div>
            </div>
          )}
          {selectedOption === "experience" && (
            <div className="p-2">
              <div className="py-2 text-sm">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("0-5")}
                  name="0-5"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&experience=0-5");
                      setFilters([...filters, "0-5"]);
                    } else {
                      setRequestURL(requestURL.replace("&experience=0-5", ""));
                      setFilters(filters.filter((f) => f !== "0-5"));
                    }
                  }}
                />
                0-5
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("6-10")}
                  name="6-10"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&experience=6-10");
                      setFilters([...filters, "6-10"]);
                    } else {
                      setRequestURL(requestURL.replace("&experience=6-10", ""));
                      setFilters(filters.filter((f) => f !== "6-10"));
                    }
                  }}
                />
                6-10
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("11-16")}
                  name="11-16"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&experience=11-16");
                      setFilters([...filters, "11-16"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&experience=11-16", "")
                      );
                      setFilters(filters.filter((f) => f !== "11-16"));
                    }
                  }}
                />
                11-16
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("16+")}
                  name="16+"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&experience=16+");
                      setFilters([...filters, "16+"]);
                    } else {
                      setRequestURL(requestURL.replace("&experience=16+", ""));
                      setFilters(filters.filter((f) => f !== "16+"));
                    }
                  }}
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
                  checked={filters.includes("100-500")}
                  name="100-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&fees=100-500");
                      setFilters([...filters, "100-500"]);
                    } else {
                      setRequestURL(requestURL.replace("&fees=100-500", ""));
                      setFilters(filters.filter((f) => f !== "100-500"));
                    }
                  }}
                />
                100-500
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("500-1000")}
                  name="500-1000"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&fees=500-1000");
                      setFilters([...filters, "500-1000"]);
                    } else {
                      setRequestURL(requestURL.replace("&fees=500-1000", ""));
                      setFilters(filters.filter((f) => f !== "500-1000"));
                    }
                  }}
                />
                500-1000
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("1000+")}
                  name="1000+"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&fees=1000+");
                      setFilters([...filters, "1000+"]);
                    } else {
                      setRequestURL(requestURL.replace("&fees=1000+", ""));
                      setFilters(filters.filter((f) => f !== "1000+"));
                    }
                  }}
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
                  checked={filters.includes("English")}
                  name="English"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=English");
                      setFilters([...filters, "English"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=English", "")
                      );
                      setFilters(filters.filter((f) => f !== "English"));
                    }
                  }}
                />
                English
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Hindi")}
                  name="Hindi"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Hindi");
                      setFilters([...filters, "Hindi"]);
                    } else {
                      setRequestURL(requestURL.replace("&language=Hindi", ""));
                      setFilters(filters.filter((f) => f !== "Hindi"));
                    }
                  }}
                />
                Hindi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Telgu")}
                  name="Telgu"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Telgu");
                      setFilters([...filters, "Telgu"]);
                    } else {
                      setRequestURL(requestURL.replace("&language=Telgu", ""));
                      setFilters(filters.filter((f) => f !== "Telgu"));
                    }
                  }}
                />
                Telgu
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Punjabi")}
                  name="Punjabi"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Punjabi");
                      setFilters([...filters, "Punjabi"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Punjabi", "")
                      );
                      setFilters(filters.filter((f) => f !== "Punjabi"));
                    }
                  }}
                />
                Punjabi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Bengali")}
                  name="Bengali"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Bengali");
                      setFilters([...filters, "Bengali"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Bengali", "")
                      );
                      setFilters(filters.filter((f) => f !== "Bengali"));
                    }
                  }}
                />
                Bengali
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Marathi")}
                  name="Marathi"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Marathi");
                      setFilters([...filters, "Marathi"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Marathi", "")
                      );
                      setFilters(filters.filter((f) => f !== "Marathi"));
                    }
                  }}
                />
                Marathi
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Urdu")}
                  name="Urdu"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Urdu");
                      setFilters([...filters, "Urdu"]);
                    } else {
                      setRequestURL(requestURL.replace("&language=Urdu", ""));
                      setFilters(filters.filter((f) => f !== "Urdu"));
                    }
                  }}
                />
                Urdu
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Gujarti")}
                  name="Gujarti"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Gujrati");
                      setFilters([...filters, "Gujarti"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Gujrati", "")
                      );
                      setFilters(filters.filter((f) => f !== "Gujarti"));
                    }
                  }}
                />
                Gujarti
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Tamil")}
                  name="Tamil"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Tamil");
                      setFilters([...filters, "Tamil"]);
                    } else {
                      setRequestURL(requestURL.replace("&language=Tamil", ""));
                      setFilters(filters.filter((f) => f !== "Tamil"));
                    }
                  }}
                />
                Tamil
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Kannada")}
                  name="Kannada"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Kannada");
                      setFilters([...filters, "Kannada"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Kannada", "")
                      );
                      setFilters(filters.filter((f) => f !== "Kannada"));
                    }
                  }}
                />
                Kannada
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Oriya")}
                  name="Oriya"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Oriya");
                      setFilters([...filters, "Oriya"]);
                    } else {
                      setRequestURL(requestURL.replace("&language=Oriya", ""));
                      setFilters(filters.filter((f) => f !== "Oriya"));
                    }
                  }}
                />
                Oriya
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Persian")}
                  name="Persian"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Persian");
                      setFilters([...filters, "Persian"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Persian", "")
                      );
                      setFilters(filters.filter((f) => f !== "Persian"));
                    }
                  }}
                />
                Persian
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Assamese")}
                  name="Assamese"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&language=Assamese");
                      setFilters([...filters, "Assamese"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&language=Assamese", "")
                      );
                      setFilters(filters.filter((f) => f !== "Assamese"));
                    }
                  }}
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
                  checked={filters.includes("Apollo Hospital")}
                  name="Apollo Hospital"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&facility=apollo-hospital");
                      setFilters([...filters, "Apollo Hospital"]);
                    } else {
                      setRequestURL(
                        requestURL.replace("&facility=apollo-hospital", "")
                      );
                      setFilters(
                        filters.filter((f) => f !== "Apollo Hospital")
                      );
                    }
                  }}
                />
                Apollo Hospital
              </div>
              <div className="py-2 text-sm border-t border-gray-100">
                <input
                  className="p-1 ms-3 me-2 font-extralight"
                  type="checkbox"
                  checked={filters.includes("Other clinic")}
                  name="Other clinic"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setRequestURL(requestURL + "&facility=online-clinic");
                    } else {
                      setRequestURL(
                        requestURL.replace("&facility=online-clinic", "")
                      );
                      setFilters(filters.filter((f) => f !== "Other clinic"));
                    }
                  }}
                />
                Other clinic
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around p-4 border-b-1 border-gray-200 h-[10%]">
        <button
          onClick={() => setShowCollapsible(false)}
          className="btn text-[#106c89] btn-outline w-[48%] rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => setShowCollapsible(false)}
          className="btn bg-[#106c89] text-white w-[48%] rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default CollapsibleFilter;