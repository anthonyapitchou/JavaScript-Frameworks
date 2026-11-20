
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "../../lib/api";

export default async function ApiProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;

  try {
    product = await getProductById(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Product image */}
          <div>
            <Image
              src={product.image.url}
              alt={product.image.alt}
              width={500}
              height={850}
              className="w-full aspect-3/4 object-cover object-top"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col gap-8">

            <h1 className="text-3xl font-semibold">
              {product.title}
            </h1>

            <p className="text-xl">
              {product.discountedPrice} SEK
            </p>

            <p className="text-sm text-gray-600">
              One of a kind
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-medium mb-4">
                Description
              </h2>

              <p className="text-base leading-loose">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium mb-4">
                Product Details
              </h2>

              <ul className="text-sm text-gray-600 space-y-3">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-blue-500 text-white py-4 mt-10 hover:bg-blue-600 transition-colors duration-300">
              ADD TO CART
            </button>

          </div>
        </div>
      </section>
    </main>
  );
}
