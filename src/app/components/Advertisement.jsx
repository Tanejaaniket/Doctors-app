function Advertisement() {
  return (
    <div className="flex sticky top-0">
      <div className="bg-[#001846] m-15 rounded-lg px-4 pt-4 pb-8">
        <div>
          <img src="/consult_doctor.webp" alt="advertisement" />
        </div>
        <p className="text-white text-sm font-semibold">
          Need help consult the right doctor?{" "}
        </p>
        <a className="text-white text-xs link">
          Call +91-80837467234 to book instantly{" "}
        </a>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
}

export default Advertisement;