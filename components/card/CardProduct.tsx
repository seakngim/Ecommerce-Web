"use client";

import { Card } from "flowbite-react";

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
      className=""
      renderImage={() => (
        <img src={image} className="h-[500px] object-cover overflow-hidden" />
      )}
    >
      <a href="#">
        <h5 className="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {quantity}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <button className="flex items-center justify-between rounded-full pl-4 pr-1 py-1 text-white space-x-3 bg-[#253C95] mt-4  text-sm font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="rounded-full bg-gray-200 md:text-base px-2 py-1 text-[#DE9727]">
            $ {price}
          </span>
        </button>
        <button onClick={onClick}>view</button>
      </div>
    </Card>
  );
}
