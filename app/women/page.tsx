import Image from "next/image";
import Link from "next/link";

export default function WomenPage() {
  return (
   <main className="min-h-screen bg-white text-black">

  {/* Page Heading */}
  <section className="px-8 pt-10 pb-8">
    <h1 className="text-5xl font-normal">Women Collection</h1>
    <p className="text-lg mt-3">All women clothing</p>
  </section>

  {/* Product Grid */}
  <section className="px-8">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {/* Product Cards 1  */}

<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/alex.jpg"
        alt="Man wearing a vintage embroidered jacket"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage embroidered jacket</p>
      <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
    </div>
  </Link>
</div>

    {/* Product Cards 2  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/asian-dress.jpg"
        alt="Woman wearing a vintage asian dress "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage dress </p>
      <p className="text-sm text-black whitespace-nowrap">1200 SEK</p>
    </div>
  </Link>
</div>


    {/* Product Cards 3  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/adrian.jpg"
        alt="Woman wearing a broderie jacket"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage jacket</p>
      <p className="text-sm text-black whitespace-nowrap">3500 SEK</p>
    </div>
  </Link>
</div>


    {/* Product Cards 4  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/old-dress.jpg"
        alt="Woman wearing a vintage brown dress"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage brown dress </p>
      <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
    </div>
  </Link>
</div>

 {/* Product Cards 5  */}
 <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/sunglasses-woman.jpg"
        alt="Woman wearing a vintage sunglasses "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage sunglasses </p>
      <p className="text-sm text-black whitespace-nowrap">1200 SEK</p>
    </div>
  </Link>
</div>


 {/* Product Cards 6  */}
  <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/women-suit.jpg"
        alt="Woman wearing a vintage suit "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage suit </p>
      <p className="text-sm text-black whitespace-nowrap">3200 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 7 */}
  <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/women-vintage1.jpg"
        alt="Woman wearing a vintage shirt "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage shirt </p>
      <p className="text-sm text-black whitespace-nowrap">1000 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 8 */}
 <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/women-white-dress.jpg"
        alt="Woman wearing a vintage white dress "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage white dress </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 9 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/color-dress.jpg"
        alt="Woman wearing a vintage asian dress "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage colorful dress </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 10 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/asian-dress.jpg"
        alt="Woman wearing a vintage asian dress "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage asian dress </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>


{/* Product Cards 11 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/vintage-denim.jpg"
        alt="Woman wearing a vintage denim  "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage denim  </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>


{/* Product Cards 12 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/white-sunglasses.jpg"
        alt="Woman wearing a vintage sunglasses  "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage sunglasses  </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>


    </div>
  </section>

</main>
)
};