
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { getProducts, type Product } from "./lib/api";

export default function Home() {
  const productListRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => console.error("API error:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[560px] sm:h-[650px] overflow-hidden">
        <Image
          src="/images/cover-picture.jpg"
          alt="Vintage Studio fashion collection"
          fill
          priority
          className="object-cover object-center"
        />

        <nav className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white text-center leading-tight">
            Vintage Studio
          </h1>

          <div className="flex items-center justify-center gap-5 sm:gap-12 md:gap-20">
            <Link
              href="/men"
              className="text-white text-sm sm:text-lg font-medium px-6 sm:px-8 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:bg-black/40"
            >
              MEN
            </Link>

            <Link
              href="/women"
              className="text-white text-sm sm:text-lg font-medium px-6 sm:px-8 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:bg-black/40"
            >
              WOMEN
            </Link>
          </div>
        </nav>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-[#333333]">
          There is always a reason to be vintage
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Embrace the vintage season with rare pieces found for special moments
        </p>
      </section>

      {/* Shopping Cards */}
      <section className="w-full px-4 sm:px-6 md:px-8">

        {/* Navigation arrows */}
        <div className="flex justify-end gap-5 mb-4 text-black">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() =>
              productListRef.current?.scrollBy({
                left: -400,
                behavior: "smooth",
              })
            }
          >
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() =>
              productListRef.current?.scrollBy({
                left: 400,
                behavior: "smooth",
              })
            }
          >
            <ArrowRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Product List */}
        <div
          ref={productListRef}
          style={{ scrollbarWidth: "none" }}
          className="flex flex-nowrap overflow-x-auto gap-4 sm:gap-5 pb-3"
        >

          {/* Product Card 1 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/15" className="block no-underline text-black">
              <Image
                src="/images/adrian.jpg"
                alt="Woman wearing a vintage embroidered jacket"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Vintage embroidered jacket</p>
                <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 2 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/13" className="block no-underline text-black">
              <Image
                src="/images/alex.jpg"
                alt="Woman wearing a vintage patterned top"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Vintage patterned top</p>
                <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 3 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/1" className="block no-underline text-black">
              <Image
                src="/images/beige-jacket.jpg"
                alt="Man wearing a beige vintage jacket"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Beige vintage jacket</p>
                <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 4 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/19" className="block no-underline text-black">
              <Image
                src="/images/women-vintage1.jpg"
                alt="Woman wearing a vintage shirt"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Vintage shirt</p>
                <p className="text-sm text-black whitespace-nowrap">1000 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 5 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/" className="block no-underline text-black">
              <Image
                src="/images/dress.jpg"
                alt="Woman wearing a vintage dress"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Blue vintage dress</p>
                <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 6 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/2" className="block no-underline text-black">
              <Image
                src="/images/mohamad-khosravi.jpg"
                alt="Man wearing a vintage suit"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Vintage suit</p>
                <p className="text-sm text-black whitespace-nowrap">3000 SEK</p>
              </div>
            </Link>
          </div>

          {/* Product Card 7 */}
          <div className="shrink-0 w-[78vw] max-w-[280px] sm:w-70 text-black">
            <Link href="/product/3" className="block no-underline text-black">
              <Image
                src="/images/mohamad.jpg"
                alt="Man wearing a vintage suit"
                width={500}
                height={650}
                className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mt-3">
                <p className="text-sm text-black">Vintage suit</p>
                <p className="text-sm text-black whitespace-nowrap">3000 SEK</p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Men and Women Categories */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">

          {/* Men shopping card */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/trouser.jpg"
              alt="Men's collection"
              fill
              className="object-cover transition-transform duration-300 ease-in-out"
            />

            <Link
              href="/men"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md border border-white/50 text-white text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full hover:scale-110 hover:bg-black/40 transition-all duration-300"
            >
              MEN
            </Link>
          </div>

          {/* Women shopping card */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/women-suit.jpg"
              alt="Women's collection"
              fill
              className="object-cover object-center transition-transform duration-300 ease-in-out"
            />

            <Link
              href="/women"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md border border-white/50 text-white text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full hover:scale-110 hover:bg-black/40 transition-all duration-300"
            >
              WOMEN
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
