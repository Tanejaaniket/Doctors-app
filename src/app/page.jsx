"use client";
import Breadcrumb from "./components/Breadcrumb";
import Filters from "./components/Filters";
import Advertisement from "./components/Advertisement";
import {
  ArrowUpDown,
  ChevronDown,
  Loader2,
  SlidersVertical,
} from "lucide-react";
import DoctorsInformation from "./components/DoctorInfoCard";
import CollapsibleFilter from "./components/CollapsibleFilter";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { XCircle } from "lucide-react";
import Faq from "./components/Faq";

export default function Home() {
  const [showCollapsible, setShowCollapsible] = useState(false);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [requestURL, setRequestURL] = useState(``);
  const [filters, setFilters] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/doctor?page=${page}${requestURL}`);
      console.log(res);
      if (requestURL !== "") {
        setFilteredDoctors(res.data.data.docs);
        setDoctors([]);
      } else {
        if (doctors[0]?._id === res.data.data?.docs[0]?._id) {
          setDoctors(res.data.data.docs);
          console.log("in doctos if");
        } else {
          console.log("in doctos else");
          setFilteredDoctors(null);
          const arr = [];
          arr.push(...doctors);
          arr.push(...res.data.data.docs);
          setDoctors(arr);
        }
      }
      setPaginationInfo(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [page, requestURL]);

  useEffect(() => {
    setPage(1);
  }, [filters]);
  
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="hidden lg:col-span-2 lg:block">
          <Filters
            requestURL={requestURL}
            setRequestURL={setRequestURL}
            filters={filters}
            setFilters={setFilters}
          />
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

              <div className="flex gap-2 overflow-x-auto">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className="btn bg-[#ddf1f8] text-[#106c89] border-[#106c89] rounded-full "
                    onClick={() => {
                      const updatedFilters = filters.filter(
                        (f) => f !== filter
                      );

                      const arr = requestURL
                        .split("&")
                        .filter(
                          (a) =>
                            !a
                              .toLowerCase()
                              .includes(
                                `=${filter.toLowerCase().replace(" ", "-")}`
                              )
                        );

                      setFilters(updatedFilters);
                      setRequestURL(arr.join("&"));
                    }}
                  >
                    {filter} <XCircle />
                  </button>
                ))}
              </div>
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

            <div className="h-full">
              {!loading && filteredDoctors
                ? filteredDoctors.map((doctor) => (
                    <DoctorsInformation key={doctor._id} doctor={doctor} />
                  ))
                : doctors.map((doctor) => (
                    <DoctorsInformation key={doctor._id} doctor={doctor} />
                  ))}
              {loading && (
                <div className="flex items-center justify-center h-[30vh] animate-spin">
                  <Loader2 />
                </div>
              )}
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
          <CollapsibleFilter
            setShowCollapsible={setShowCollapsible}
            requestURL={requestURL}
            setRequestURL={setRequestURL}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </div>
      <div className="w-full font-semibold py-5 lg:px-[5vw] mx-auto space-y-8">
        <h1 className="">Book Consult for General Medicine Online</h1>
        <p className="">
          Booking an appointment with a top general physician (GP) is now easier
          than ever with Apollo 24|7. Our experienced doctors provide
          comprehensive care for a wide range of medical conditions, including
          fever, allergies, and diabetes. You can conveniently schedule an
          online general physician consultation or visit a trusted
          hospital/clinic near you. Our allergies doctor and diabetes doctor
          offer flexible appointment slots to suit your needs. With transparent
          general physician fees and genuine general physician reviews, you can
          make an informed decision when choosing your healthcare provider. Take
          charge of your health today by booking a doctor near your location by
          searching the phrase <strong>general physician near me</strong>.
        </p>

        <section>
          <h2 className="">What is General Medicine?</h2>
          <p className="">
            General medicine is a medical speciality that focuses on the
            prevention, diagnosis, and treatment of internal diseases in adults.
            This speciality encompasses a wide range of acute and chronic
            conditions affecting various parts of the body, including fever,
            asthma, heart disease, liver problems, hypertension, and
            neurological disorders. General medicine plays a crucial role in
            healthcare by providing comprehensive medical care, managing complex
            conditions, and addressing multiple co-morbidities.
          </p>
        </section>

        <section>
          <h2 className=" font-semibold mb-2">Who is a General Physician?</h2>
          <p className="text-base leading-relaxed">
            A general physician is a medical doctor who specialises in the
            diagnosis, treatment, and prevention of adult diseases. They
            complete an MBBS degree followed by postgraduate training in General
            Medicine or Internal Medicine. General physicians are trained to
            diagnose and treat a wide range of medical conditions, providing
            comprehensive care including preventive health measures, early
            detection, and long-term management of chronic conditions.
          </p>
        </section>

        <section>
          <h2 className=" font-semibold mb-2">
            What Do General Physicians Do?
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>
              Conducting thorough physical examinations and taking detailed
              medical histories to accurately diagnose health issues
            </li>
            <li>
              Collaborating with other healthcare professionals, such as
              specialists and nurses, to ensure comprehensive and coordinated
              patient care
            </li>
            <li>
              Educating patients about their health conditions, treatment
              options, and self-care strategies to promote better health
              outcomes
            </li>
            <li>
              Providing preventive care, such as vaccinations and health
              screenings, to help patients maintain optimal health and prevent
              the onset of diseases
            </li>
            <li>
              Ordering and interpreting diagnostic tests, such as blood work,
              imaging studies, and biopsies, to identify underlying conditions
            </li>
            <li>
              Providing preventive care, such as vaccinations and health
              screenings, to help patients maintain optimal health and prevent
              the onset of diseases
            </li>
          </ul>
        </section>

        <section>
          <h2 className=" font-semibold mb-2">
            Sub-Specialities of General Medicine
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>
              Rural Medicine: General physicians practising in rural areas often
              have a broad skill set to address the diverse healthcare needs of
              communities with limited access to specialist care.
            </li>
            <li>
              Occupational Medicine: Occupational medicine specialists focus on
              the health and safety of workers, preventing and treating
              work-related injuries and illnesses, and promoting safe work
              environments.
            </li>
            <li>
              Addiction Medicine: This sub-speciality addresses substance use
              disorders and related health issues, providing evidence-based
              treatments and support for individuals struggling with addiction.
            </li>
            <li>
              Paediatric Medicine: While general medicine primarily focuses on
              adult care, some general physicians may have additional training
              in paediatric medicine, allowing them to provide care for children
              and adolescents.
            </li>
            <li>
              Preventive Medicine: Preventive medicine specialists focus on
              promoting health and preventing diseases at the individual and
              population levels through lifestyle interventions, health
              education, and public health initiatives.
            </li>
            <li>
              Sports Medicine: This sub-speciality deals with the prevention,
              diagnosis, and treatment of sports-related injuries and
              conditions, helping athletes maintain optimal performance and
              recover from injuries.
            </li>
            <li>
              Palliative Care: Palliative care specialists provide compassionate
              care to patients with serious or life-limiting illnesses, focusing
              on symptom management and quality of life.
            </li>
            <li>
              Geriatric Medicine: This sub-speciality focuses on the unique
              healthcare needs of older adults, addressing age-related
              conditions and promoting healthy ageing
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-2">
            Why Choose an Apollo 24|7 General Physician?
          </h2>
          <p className="text-base leading-relaxed">
            Apollo 24|7 doctors are highly skilled and offer expert care for a
            variety of conditions like fever, allergies, and diabetes. The
            platform provides easy access to both online and in-clinic
            consultations. With transparent reviews and pricing, you can
            confidently find a trusted doctor near you by simply searching{" "}
            <strong>general physician near me</strong>.
          </p>
        </section>
        <div>
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <Faq/>
        </div>
      </div>
    </>
  );
}
