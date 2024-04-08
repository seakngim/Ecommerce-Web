"use client";

import { motion } from "framer-motion";
import React from "react";
import style from "./style.module.css";
import { policyList, teamOurList } from "./list";
import { RiCheckDoubleFill } from "react-icons/ri";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ISTAD Ecommerce About Us",
//   description: "We are providing the best service for you!",
// };

export default function page() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto lg:px-4 px-2 py-5">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className={`${style.heading}`}>Privacy Policy</h1>
        </motion.div>
        {/* section team and condition */}
        <section className="mb-4">
          {policyList?.map((policy) => (
            <div className="grid grid-cols-5 gap-4 bg-white p-5 rounded-lg" key={policy?.id}>
              <div className="col-span-1">
                <h3 className={`${style.title}`}>{policy?.name}</h3>
              </div>
              <div className="col-span-4">
              <ul>{policy?.list?.map((list)=>(
                <li className={`${style.list}`}><RiCheckDoubleFill className="flex-none w-14 mt-1 text-[#253C95]" />{list?.description}</li>
              ))}</ul>

              </div>
            </div>
          ))}
        </section>
        {/* section team and condition */}
        <section className="grid md:grid-cols-2 gap-4">
          {teamOurList?.map((teamOur) => (
            <div
              className="bg-white rounded-lg hover:shadow-md p-5"
              key={teamOur?.id}
            >
              <h3 className={`${style.title}`}>{teamOur?.name}</h3>
              <p className={`${style.paragraph}`}>{teamOur?.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
