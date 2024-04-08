import { Carousel } from "flowbite-react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";

export default function CarouselComponent() {
  const CarouselList = [
    {
      id: 1,
      name: "Center of Science and Technology Advanced Development",
      description: (
        <p>
          CSTAD is a noteworthy science and technology center in Cambodia. CSTAD
          has routed Cambodian students to advanced science and technology,
          research, and develop digital skills, and our graduates have been
          guaranteed excellent job opportunities with the Top IT company.
        </p>
      ),
    },
    {
      id: 2,
      name: "Vision",
      description: (<p>Advanced IT Center in Cambodia</p>),
    },
    {
      id: 3,
      name: "Mission",
      description: (
        <p>
          Provide the latest methodology with high-quality training and
          mentoring Build up the capacity and career of IT experts Cambodia
          Consult and connect CSTAD trainees to top IT careers
        </p>
      ),
    },
  ];

  return (
    <AuroraBackground>
      <Carousel>
        {CarouselList?.map((carousellist) => (
          <div key={carousellist.id}>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                // delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 justify-center container mx-auto px-20"
            >
              <h1 className="text-xl md:text-4xl font-bold text-[#253C95] dark:text-[#253C95]">
                {carousellist.name}
              </h1>
              <p className="font-extralight md:text-base text-sm dark:text-neutral-200 md:py-4 lg:mr-60 py-2">
                {carousellist.description}
              </p>
              <button className="bg-gradient-to-r from-[#253C95] to-blue-500 hover:from-blue-500 hover:to-[#253C95] rounded-full w-fit text-white dark:text-gray-50 lg:my-8 px-4 py-2 duration-500">
                Enroll Now
              </button>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </AuroraBackground>
  );
}
