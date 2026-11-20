
import Image from "next/image";
import Link from "next/link";
import products from "../data/products.json";

export default function MenPage() {
  const menProducts = products.filter((product) =>
    product.tags.includes("men")
  );

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Page Heading */}
      <section className="px-8 pt-10 pb-8">
        <h1 className="text-5xl font-normal">Men Collection</h1>
        <p className="text-lg mt-3">All Men clothing</p>
      </section>

      {/* Product Grid */}
      <section className="px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {menProducts.map((product) => (
            <div className="text-black" key={product.id}>
              <Link
                href={`/product/${product.id}`}
                className="block no-underline text-black"
              >
                <div className="overflow-hidden">
                  <Image
                    src={product.image.url}
                    alt={product.image.alt}
                    width={500}
                    height={650}
                    className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <div className="flex justify-between items-start mt-3">
                  <p className="text-sm text-black">
                    {product.title}
                  </p>

                  <p className="text-sm text-black whitespace-nowrap">
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
