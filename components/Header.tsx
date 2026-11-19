import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket, Mail } from "lucide-react";


function Header() {
  return (
    <header className="w-full bg-white text-black">
      <div className="grid grid-cols-3 items-center px-8 py-5">

        {/* Left navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/women" className="hover:opacity-50 transition-opacity">
            Women
          </Link>
          <Link href="/men" className="hover:opacity-50 transition-opacity">
            Men
          </Link>
        </nav>

        {/* Center logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/Vintage-Studio-Logo.png"
              alt="Vintage Studio"
              width={250}
              height={90}
              priority
            />
          </Link>
        </div>

        {/* Right navigation */}
        <nav className="flex items-center justify-end gap-5">

          <button
            aria-label="Search"
            className="hover:opacity-50 transition-opacity"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link
            href="/contact"
            aria-label="Contact Us"
            className="hover:opacity-50 transition-opacity"
          >
            <Mail size={20} strokeWidth={1.5} />
          </Link>

          <Link
            href="/about"
            className="hover:opacity-50 transition-opacity"
          >
            About Us
          </Link>

          <Link
            href="/cart"
            aria-label="Basket"
            className="hover:opacity-50 transition-opacity"
          >
            <ShoppingBasket size={20} strokeWidth={1.5} />
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;
