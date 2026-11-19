import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black">


{/* Product Detail */}
  <section className="px-8 py-10">
    <div className="mb-8">
    <h2 className="text-5xl font-normal">Men Collection</h2>
    <p className="text-lg mt-3">Hat</p>
  </div>

  {/* Product Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* Left - Product Gallery */}
  <div>
    <Image
      src="/images/retro-hat.jpg"
      alt="Man wearing a retro hat"
      width={500}
      height={850}
      className="w-full aspect-3/4 object-cover object-top transition-transform duration-300 "
    />
  </div>

  {/* Right - Product Info */}
{/* Right - Product Information */}
<div className="flex flex-col gap-4">

  {/* Product Name & Price */}
  <h2 className="text-3xl font-semibold">
   Vintage  Hat
  </h2>

  <p className="text-xl">
    1500 SEK
  </p>

  {/* Availability */}
  <p className="text-sm text-gray-600">
    One of a kind · Only one size available 
  </p>

  {/* Description */}
  <div className="mt-4">
    <h3 className="text-lg font-medium mb-2">Description</h3>
    <p className="text-base leading-relaxed">
A distinctive vintage flat cap featuring a classic dark design and timeless silhouette. 
Inspired by traditional menswear, this understated accessory adds character and old-school charm to any outfit.</p>
  </div>

  {/* Product Details */}
  <div className="mt-4">
    <h3 className="text-lg font-medium mb-2">Product Details</h3>
    <ul className="text-sm text-gray-600 space-y-2">
      <li>Retro Hat</li>
      <li>Classic retro design</li>
      <li>Size 59</li>
      <li>Timeless accessory </li>
    </ul>
  </div>

  {/* Add to Cart */}
  <button className="w-full bg-blue-500 text-white py-4 mt-6 hover:bg-blue-600 transition-colors duration-300 ">
    ADD TO CART
  </button>

</div>
</div>

  </section>
    </main>
  );
}