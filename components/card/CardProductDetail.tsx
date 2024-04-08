import { Card } from "flowbite-react";

type PropsType = {
  category: string;
  // image: string;
};

export default function CardComponent({
  category,
}: // image,
PropsType) {
  return (
    <button className="px-3 py-1 text-md border border-[#DE9727] rounded-full font-medium tracking-tight text-gray-500">
      {category}
    </button>
  );
}
