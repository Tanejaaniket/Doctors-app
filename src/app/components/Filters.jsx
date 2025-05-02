function Filters() {
  return (
    <div className="h-[85vh] overflow-y-auto flex">
      <div className="w-1/3"></div>
      <div>
        <div className="flex justify-between items-center p-4 border-b-1 border-gray-200">
          <h1 className="font-bold">Filters</h1>
          <button className="text-[#106c89] font-bold cursor-pointer">Clear All</button>
        </div>
        <div className="py-4">
          <div className="w-full px-2">
            <button className="btn btn-primary btn-outline rounded-lg w-full">
              Show Doctors Near Me
            </button>
          </div>
          <div className="w-full px-2">
            <h3 className="text-lg font-semibold py-4">Mode of consultation</h3>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Hospital Visit"
                id=""
              />
              Hospital Visit
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Online Consult"
                id=""
              />
              Online Consult
            </div>
          </div>
          <div className="w-full px-2">
            <h3 className="text-lg font-semibold py-4">Experience in years</h3>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="0-5"
                id=""
              />
              0-5
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="6-10"
                id=""
              />
              6-10
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="11-16"
                id=""
              />
              11-16
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="16+"
                id=""
              />
              16+
            </div>
          </div>
          <div className="w-full px-2">
            <h3 className="text-lg font-semibold py-4">Fees (in rupees)</h3>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="100-500"
                id=""
              />
              100-500
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="500-1000"
                id=""
              />
              500-1000
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="1000+"
                id=""
              />
              1000+
            </div>
          </div>
          <div className="w-full px-2">
            <h3 className="text-lg font-semibold py-4">Language</h3>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="English"
                id=""
              />
              English
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Hindi"
                id=""
              />
              Hindi
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Telgu"
                id=""
              />
              Telgu
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Punjabi"
                id=""
              />
              Punjabi
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Bengali"
                id=""
              />
              Bengali
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Marathi"
                id=""
              />
              Marathi
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Urdu"
                id=""
              />
              Urdu
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Gujarti"
                id=""
              />
              Gujarti
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Tamil"
                id=""
              />
              Tamil
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Kannada"
                id=""
              />
              Kannada
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Oriya"
                id=""
              />
              Oriya
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Persian"
                id=""
              />
              Persian
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Assamese"
                id=""
              />
              Assamese
            </div>
          </div>
          <div className="w-full px-2">
            <h3 className="text-lg font-semibold py-4">Facility</h3>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Apollo Hospital"
                id=""
              />
              Apollo Hospital
            </div>
            <div className="py-1">
              <input
                className="p-1 ms-3 me-2 font-extralight"
                type="checkbox"
                name="Other clinic"
                id=""
              />
              Other clinic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
