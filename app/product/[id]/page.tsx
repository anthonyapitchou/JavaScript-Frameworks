
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "../../data/products.json";
import AddToCartButton from "@/components/AddToCartButton";

// Tell Next.js which product IDs exist
export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

// Turn "hat" into "Hat"
function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);

  if (!product) notFound();

  const [collection, type] = product.tags;

  const details = product.tags.filter((tag) => /^[A-Z]/.test(tag));

  return (
    <main className="min-h-screen bg-white text-black">

      <section className="px-5 sm:px-8 py-8 sm:py-10">

        {/* Product Layout */}
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

            {/* Collection Title on Image */}
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl sm:text-5xl font-normal text-white drop-shadow-lg">
                {capitalize(collection)} Collection
              </h1>
              <p className="text-base sm:text-lg text-white drop-shadow-lg mt-1">
                {capitalize(type)}
              </p>
            </div>

          </div>

          {/* Product Information */}
          <div className="flex flex-col gap-6 md:gap-8">

            <h2 className="text-2xl sm:text-3xl font-semibold">
              {product.title}
            </h2>

            <p className="text-lg sm:text-xl">
              {product.price} SEK
            </p>

            <p className="text-sm text-gray-600">
              One of a kind · Only one size available
            </p>

            {/* Description */}
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-medium mb-3">
                Description
              </h3>

              <p className="text-sm sm:text-base leading-loose">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            {details.length > 0 && (
              <div className="mt-2 sm:mt-6">
                <h3 className="text-lg font-medium mb-4">
                  Product Details
                </h3>

                <ul className="text-sm text-gray-600 space-y-3">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart */}
            <AddToCartButton product={product} source="local" />

          </div>
        </div>
      </section>
    </main>
  );
}
