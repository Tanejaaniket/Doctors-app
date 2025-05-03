import { Info } from "lucide-react";

function DoctorsInformation({ doctor }) {
  return (
    <div className="w-full p-4 grid grid-cols-5 border-gray-200  lg:grid-cols-6 border-b lg:border rounded-md lg:my-4 hover:shadow-md">
      <div className="col-span-1">
        <img
          src={
            doctor?.image?.startsWith("http") ? doctor.image : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          }
          alt="Doctor Image with wrong url or no image"
          className="w-[80px] h-[80px] "
        />
      </div>
      <div className="col-span-3">
        <h3 className="text-lg font-bold flex items-center gap-3">Dr. {doctor.name} <Info size={15} /></h3>
        <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {doctor.specialization}
        </p>
        <p className="text-sm font-semibold text-[#6b45c6] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {doctor.experience} YEARS {doctor.qualifications.toUpperCase()}
        </p>
        <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
          Apollo 24|7 virtual clinic - {doctor.availabilityLocation?.online}
        </p>
      </div>
      <div className="col-span-full lg:col-span-2 pt-4 flex">
        <div className={doctor.fees.offline > 0 ? "w-1/2" : "w-full"}>
          <p className="text-center text-xl font-semibold pb-2">
            {doctor.cashbackAmount ? (
              <>
                <span>₹{doctor.fees.online} |</span>
                <span className="text-xs text-orange-400"> ₹{doctor.cashbackAmount} cashback</span>
              </>
            ) : (
              <span>₹{doctor.fees.online}</span>
            )}
          </p>
          <button className="btn btn-outline btn-primary w-full rounded-md">
            Consult Online
          </button>
        </div>
        {doctor.fees.offline > 0 && (
          <div className="w-1/2 ps-2">
            <p className="text-center text-xl font-semibold pb-2">
              ₹{doctor.fees.offline}
            </p>
            <button className="btn bg-[#106c89] text-white w-full rounded-md">
              Consult Offline
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorsInformation;