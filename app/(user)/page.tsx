"use client";
import CardProduct from "@/components/card/CardProduct";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ENDPOINT = "https://store.istad.co/api/products/";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  }, []);
  return (
    <main>
      <section>
      </section>
      {/* section product */}
      <section className="my-6 container mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-flow-row gap-4">
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
      </section>
    </main>
  );
}
