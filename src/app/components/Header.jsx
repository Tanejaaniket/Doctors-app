import { ChevronDown, CircleUserRound, MapPin, Search } from "lucide-react";

function Header() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex items-center justify-center min-w-[30%]">
          <div>
            <a className="btn btn-ghost text-xl">
              <img src="/apollo247.svg" alt="logo" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MapPin />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Select location</p>
              <p className="text-sm flex font-bold">
                Select Address <ChevronDown />
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center w-[40%]">
          <div className="relative w-full">
            <input
              type="text"
              className="input input-bordered w-16 bg-base-300 md:w-full"
            />
            <div className="absolute top-2 left-2">
              <Search />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[30%]">
          <div className="w-10 avatar ms-2 lg:hidden">
            <CircleUserRound size={"30"} />
          </div>
          <div>
            <button className="btn btn-outline hidden rounded-md lg:flex">
              <CircleUserRound size={"30"} />
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full items-center min-h-[32px] bg-base-100 shadow-md px-[10%] justify-evenly">
        <div className="font-bold">Consult Doctor</div>
        <div className="font-bold">Lab Test</div>
        <div className="font-bold">Circle Medicine</div>
        <div className="font-bold">Find Doctors</div>
        <div className="font-bold">Health Records</div>
        <div className="font-bold">Diabetes Reversal</div>
        <div className="font-bold">Buy Insurance</div>
      </div>
    </>
  );
}

export default Header;
