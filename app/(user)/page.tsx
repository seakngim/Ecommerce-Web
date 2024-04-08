"use client";
import CardProduct from "@/components/card/CardProduct";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import CarouselComponent from "@/components/carousel/Carousel";
import CardComponent from "@/components/card/CardProductDetail";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ENDPOINT = "https://store.istad.co/api/products/";

export default function Home() {
  // const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
    // .then((data) => setCategory(data))
  }, []);
  return (
    <main>
        <CarouselComponent />

      {/* section product */}
      <section className="my-6 px-5 container mx-auto ">
        <h1 className={`${style.heading}`}>Product</h1>
        <div className="flex flex-wrap justify-center gap-2 my-5 ">
          {products.map((product: any, index) => (
            <CardComponent key={index} category={product.category} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 grid-flow-row gap-4">
          {products.map((product: any, index) => (
            <CardProduct
              onClick={() => router.push(`/view/${product.id}`)}
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
