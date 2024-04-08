"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

type PropsType = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  onClick?: () => void;
};

export default function CardProduct({
  name,
  image,
  price,
  quantity,
  onClick,
}: PropsType) {
  return (
    <Card
      className="max-w-sm mx-auto border-0 hover:shadow-lg duration-300"
      renderImage={() => (
        <div className="relative rounded-t-lg max-w-auto overflow-hidden bg-cover bg-no-repeat">
          <Image
            src={image}
            alt={name}
            width={384}
            height={150}
            className="hover:scale-125 rounded-t-lg h-80"
          />
        </div>
      )}
    >
      <div className=" -my-20">
        <h5 className="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="mb-5 mt-2.5 flex items-center">
          Quantity: {quantity}
        </div>
        <div className="sm:flex lg:inline items-center justify-between">
          <button className="flex items-center justify-between rounded-full pl-4 pr-1 py-1 text-white space-x-3 bg-[#253C95] mt-4  text-sm font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="rounded-full line-clamp-1 bg-gray-200 md:text-base px-2 py-1 text-[#DE9727]">
              $ {price}
            </span>
          </button>
          {/* <button onClick={onClick}  className="justify-between rounded-full w-full py-2 text-center text-white space-x-3 bg-[#253C95] mt-4 text-md font-bold dark:bg-zinc-800">view</button> */}
        </div>
      </div>
    </Card>
  );
}
