import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <Carousel className="h-screen pb-28">
      <div>
        <Image
          src="https://istad.co/resources/img/slide/slide-3.jpg"
          alt="..."
          className="h-screen w-full rounded-0 opacity-70"
        />
        <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
          <div className="lg:px-6 px-4 text-white">
            <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
              Center of Science and Technology Advanced Development
            </h1>
            <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
              CSTAD is a noteworthy science and technology center in Cambodia.
              CSTAD has routed Cambodian students to advanced science and
              technology, research, and develop digital skills, and our
              graduates have been guaranteed excellent job opportunities with
              the Top IT company.
            </p>
            <div className="lg:mt-16 mt-10">
              <a
                href="/enroll"
                className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://istad.co/resources/img/slide/slide-2.jpg"
          alt="..."
          className="h-screen w-full rounded-0 opacity-90"
        />
        <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
          <div className="lg:px-6 px-4 text-white">
            <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
              Vision
            </h1>
            <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
              Advanced IT Center in Cambodia
            </p>
            <div className="lg:mt-16 mt-10">
              <a
                href="/enroll"
                className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://istad.co/resources/img/slide/slide-1.jpg"
          alt="..."
          className="h-screen w-full rounded-0 opacity-90"
        />
        <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
          <div className="lg:px-6 px-4 text-white">
            <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
              Mission
            </h1>
            <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
              Provide the latest methodology with high-quality training and
              mentoring Build up the capacity and career of IT experts Cambodia
              Consult and connect CSTAD trainees to top IT careers
            </p>
            <div className="lg:mt-16 mt-10">
              <a
                href="/enroll"
                className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
