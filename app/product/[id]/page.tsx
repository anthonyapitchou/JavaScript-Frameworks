import Image from "next/image";
import { notFound } from "next/navigation";
import products from "../../data/products.json";
import { useCart } from "../../cart/CartContext";
import AddToCartButton from "@/components/AddToCartButton";
// Tell Next.js which product IDs exist (ids must be strings)
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

  // Find the product matching the id in the URL
  const product = products.find((p) => String(p.id) === id);

  // Show the 404 page if no product matches
  if (!product) notFound();

  // First tag is the collection (men/women), second tag is the product type
  const [collection, type] = product.tags;

  // Detail lines are the tags that start with a capital letter
  const details = product.tags.filter((tag) => /^[A-Z]/.test(tag));

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Product Detail */}
      <section className="px-8 py-10">
        <div className="mb-8">
          <h2 className="text-5xl font-normal">
            {capitalize(collection)} Collection
          </h2>
          <p className="text-lg mt-3">{capitalize(type)}</p>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Product Gallery */}
          <div>
            <Image
              src={product.image.url}
              alt={product.image.alt}
              width={500}
              height={850}
              className="w-full aspect-3/4 object-cover object-top transition-transform duration-300"
            />
          </div>

          {/* Right - Product Information */}
          <div className="flex flex-col gap-8">
            {/* Product Name & Price */}
            <h2 className="text-3xl font-semibold">{product.title}</h2>

            <p className="text-xl">{product.price} SEK</p>

            {/* Availability */}
            <p className="text-sm text-gray-600">
              One of a kind · Only one size available
            </p>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Description</h3>
              <p className="text-base leading-loose">{product.description}</p>
            </div>

            {/* Product Details (hidden when the product has none) */}
            {details.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Product Details</h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart */}
           <AddToCartButton product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}