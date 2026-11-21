
import Image from "next/image";
import Link from "next/link";
import products from "../data/products.json";

export default function WomenPage() {
  const womenProducts = products.filter((product) =>
    product.tags.includes("women")
  );

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Page Heading */}
      <section className="px-5 sm:px-8 pt-8 sm:pt-10 pb-8">
        <h1 className="text-4xl sm:text-5xl font-normal leading-tight">
          Women Collection
        </h1>

        <p className="text-base sm:text-lg mt-3 text-gray-700">
          All women clothing
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-5 sm:px-8 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-5">

          {womenProducts.map((product) => (
            <div className="text-black min-w-0" key={product.id}>
              <Link
                href={`/product/${product.id}`}
                className="block no-underline text-black"
              >
                {/* Product Image */}
                <div className="overflow-hidden">
                  <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    width={500}
                    height={650}
                    className="w-full h-[280px] sm:h-[380px] md:h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                {/* Product Information */}
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-sm sm:text-base text-black leading-snug">
                    {product.title}
                  </p>

                  <p className="text-sm sm:text-base text-gray-700">
                    {product.price} SEK
                  </p>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}