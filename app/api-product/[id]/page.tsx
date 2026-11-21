
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "../../lib/api";
import AddToCartButton from "@/components/AddToCartButton";

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

      <section className="px-5 sm:px-8 py-8 sm:py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Product Image */}
          <div className="relative overflow-hidden">

            <Image
              src={product.image.url}
              alt={product.image.alt}
              width={500}
              height={850}
              className="w-full aspect-3/4 object-cover object-top"
            />

            {/* Product Title on Image */}
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl sm:text-5xl font-normal text-white drop-shadow-lg">
                {product.title}
              </h1>
            </div>

          </div>

          {/* Product Information */}
          <div className="flex flex-col gap-6 md:gap-8">

            <h2 className="text-2xl sm:text-3xl font-semibold">
              {product.title}
            </h2>

            <p className="text-lg sm:text-xl">
              {product.discountedPrice} SEK
            </p>

            <p className="text-sm text-gray-600">
              One of a kind
            </p>

            {/* Description */}
            <div className="mt-2 sm:mt-6">
              <h2 className="text-lg font-medium mb-3">
                Description
              </h2>

              <p className="text-sm sm:text-base leading-loose">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="mt-2 sm:mt-6">
              <h2 className="text-lg font-medium mb-4">
                Product Details
              </h2>

              <ul className="text-sm text-gray-600 space-y-3">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <AddToCartButton product={product} source="api" />

          </div>
        </div>
      </section>
    </main>
  );
}