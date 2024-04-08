"use client";

import { motion } from "framer-motion";
import React from "react";
import style from "./style.module.css";
import {
  RiTelegramFill,
  RiPhoneFill,
  RiMapPin2Fill,
  RiFacebookCircleFill,
  RiMailFill,
  RiGlobalFill,
  RiYoutubeFill,
  RiArrowRightDoubleLine,
  RiCheckDoubleFill,
} from "react-icons/ri";
import Image from "next/image";
import { missionVisionSloganList } from "./list";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ISTAD Ecommerce About Us",
//   description: "We are providing the best service for you!",
// };

export default function page() {
  return (
    <main className="bg-gray-50 text-gray-700">
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
          <h1 className={`${style.heading}`}>About Us</h1>
        </motion.div>
        <section className="grid lg:grid-cols-2 lg:gap-8 my-5">
          <div className="relative max-w-auto overflow-hidden rounded-lg bg-cover bg-no-repeat">
            <Image
              width={200}
              height={200}
              className="transition w-full h-full duration-300 rounded-lg hover:scale-110"
              src="https://lh3.googleusercontent.com/p/AF1QipMJxGS9_pe91tEqz6zYRrVH_kdK4h9X2b18cFpa=s680-w680-h510"
              alt="image"
            />
          </div>
          <div>
            <h3 className={`${style.title}`}>
              {/* <RiArrowRightDoubleLine className="flex-none mt-1 text-[#DF9A27]" /> */}
              WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
            </h3>
            <p className="indent-8 text-justify list-disc tracking-widest pb-5">
              CSTAD is a noteworthy science and technology center in Cambodia.
              CSTAD has routed Cambodian students to advanced science and
              technology, research, and develop digital skills and our graduates
              have been guaranteed excellent job opportunities with the Top IT
              company. CSTAD will continue to provide high-quality training with
              the latest methodology, and roadmap as well as the best choice for
              those who want to be an IT expert in Cambodia.
            </p>
          </div>
        </section>
        {/* section mission and vision */}
        <section className="grid lg:grid-cols-2 lg:gap-8 my-5">
          <div>
            {/* section mission, vision and slogan  */}
            {missionVisionSloganList?.map((mission) => (
              <div key={mission?.id}>
                <h3 className={`${style.title}`}>{mission?.name}</h3>
                <ul>
                  {mission?.list?.map((list) => (
                    <li className={`${style.decription}`}>
                      <RiArrowRightDoubleLine className="flex-none w-10 mt-1 text-[#DF9A27]" />
                      {list?.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* image */}
          <div>
            <h3 className={`${style.title}`}>
              IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
            </h3>
            <ul className="leading-loose">
              <li className={`${style.list}`}>
                <RiMapPin2Fill className="flex-none w-10 mt-2 text-[#253C95]" />
                No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom
                Penh, Cambodia
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiPhoneFill className="flex-none w-10 mt-0 text-[#253C95]" />
                (+855) 95 990 910 | (+855) 93 990 910
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiTelegramFill className="flex-none w-10 mt-0 text-[#253C95]" />
                <a href="https://t.me/istadkh" target="_blank">
                  Telegram Channel
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiFacebookCircleFill className="flex-none w-10 mt-0 text-[#253C95]" />
                <a href="https://www.fb.com/istad.co" target="_blank">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiMailFill className="flex-none w-10 mt-0 text-[#253C95]" />
                <a href="mailto: info.istad@gmail.com" target="_blank">
                  info.istad@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiGlobalFill className="flex-none w-10 mt-0 text-[#253C95]" />
                <a href="https://www.istad.co" target="_blank">
                  www.istad.co
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <RiYoutubeFill className="flex-none w-10 mt-0 text-[#253C95]" />
                <a
                  href="https://www.youtube.com/channel/UCUaq9S8Gu4zteE-x77JT-kA"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
