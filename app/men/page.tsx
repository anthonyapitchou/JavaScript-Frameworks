import Image from "next/image";
import Link from "next/link";

export default function MenPage() {
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
      {/* Product Cards 1  */}

<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/beige-jacket.jpg"
        alt="Man wearing a beige jacket"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage Beige jacket</p>
      <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
    </div>
  </Link>
</div>

    {/* Product Cards 2  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/mohamad-khosravi.jpg"
        alt="Man wearing a vintage suit"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage suit</p>
      <p className="text-sm text-black whitespace-nowrap">3200 SEK</p>
    </div>
  </Link>
</div>


    {/* Product Cards 3  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/mohamad.jpg"
        alt="Man wearing a vintage blue suit"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage blue suit</p>
      <p className="text-sm text-black whitespace-nowrap">3200 SEK</p>
    </div>
  </Link>
</div>


    {/* Product Cards 4  */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/nicolas.jpg"
        alt="Man wearing a vintage colored suit"
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage colored suit</p>
      <p className="text-sm text-black whitespace-nowrap">3200 SEK</p>
    </div>
  </Link>
</div>

 {/* Product Cards 5  */}
 <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/trouser.jpg"
        alt="Woman wearing a vintage trouser "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage trouser </p>
      <p className="text-sm text-black whitespace-nowrap">1200 SEK</p>
    </div>
  </Link>
</div>


 {/* Product Cards 6  */}
  <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/vintage-hat.jpg"
        alt="Man wearing a vintage hat "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage hat </p>
      <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 7 */}
  <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/brown-hat.jpg"
        alt="Woman wearing a vintage brown hat "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage brown hat </p>
      <p className="text-sm text-black whitespace-nowrap">2500 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 8 */}
 <div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/vintage-shirt.jpg"
        alt="Man wearing a vintage shirt "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage shirt </p>
      <p className="text-sm text-black whitespace-nowrap">1200 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 9 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/vintage-braces.jpg"
        alt="Man wearing vintage braces "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage braces </p>
      <p className="text-sm text-black whitespace-nowrap">700 SEK</p>
    </div>
  </Link>
</div>

{/* Product Cards 10 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/vintage-coat.jpg"
        alt="Man wearing a vintage coat "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage coat </p>
      <p className="text-sm text-black whitespace-nowrap">3500 SEK</p>
    </div>
  </Link>
</div>


{/* Product Cards 11 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/retro-trouser.jpg"
        alt="Man wearing a vintage trouser "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage trouser </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>


{/* Product Cards 12 */}
<div className="text-black">
  <Link href="/product/1" className="block no-underline text-black">
    <div className="overflow-hidden">
      <Image
        src="/images/retro-hat.jpg"
        alt="Man wearing a vintage hat "
        width={500}
        height={650}
        className="w-full h-95 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>

    <div className="flex justify-between items-start mt-3">
      <p className="text-sm text-black">Vintage hat  </p>
      <p className="text-sm text-black whitespace-nowrap">1500 SEK</p>
    </div>
  </Link>
</div>


    </div>
  </section>

</main>
)
};