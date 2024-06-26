import React from "react";
import course1 from "../../../assets/course1.png";
import course2 from "../../../assets/course2.png";
import course3 from "../../../assets/course3.png";
import { formatCurrency } from "../../../utils/Currency";

const courseEarn = [
  {
    id: crypto.randomUUID(),
    title: "Total Earnings",
    figure: "362,870",
    img: course1,
  },

  {
    id: crypto.randomUUID(),
    title: "Total Clients",
    figure: "7,876",
    img: course2,
  },
  {
    id: crypto.randomUUID(),
    title: "Total Courses",
    figure: "396",
    img: course3,
  },
];

const Courses = () => {
  return (
    <main className="md:flex items-center justify-between gap-10">
      {/* <section> */}
      <section className="md:flex items-center gap-10">
        <div className="flex items-center gap-3 shadow shadow-[#032BF2] p-2 rounded-md">
          {/* Total Earnings */}
          <img src={course1} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Earnings</p>
            <h3 className=" text-blue font-bold text-2xl">
              {formatCurrency("362870")}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3  shadow shadow-[#032BF2] p-2 rounded-md">
          {/* Total Clients */}
          <img src={course2} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Clients</p>
            <h3 className=" text-blue font-bold text-2xl">7,876</h3>
          </div>
        </div>
        <div className="flex items-center gap-3  shadow shadow-[#032BF2] p-2 rounded-md">
          {/* Total Clients */}
          <img src={course3} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Clients</p>
            <h3 className=" text-blue font-bold text-2xl">7,876</h3>
          </div>
        </div>
      </section>
      {/* </section> */}
      <button className=" bg-blue text-white h-14 w-44 font-semibold rounded-md">
        + Add a Course
      </button>
    </main>
  );
};

export default Courses;
