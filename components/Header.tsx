import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket, Heart } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-white text-black">
      <div className="grid grid-cols-3 items-center px-8 py-5">

        {/* Left navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:opacity-50 transition-opacity">
            Women
          </Link>
          <Link href="/" className="hover:opacity-50 transition-opacity">
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

        {/* Right actions */}
        <div className="flex items-center justify-end gap-5">

          <button
            aria-label="Search"
            className="hover:opacity-50 transition-opacity"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Login or profile"
            className="hover:opacity-50 transition-opacity"
          >
            Profile
          </button>

          <button
            aria-label="Wishlist"
            className="hover:opacity-50 transition-opacity"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>

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

        </div>
      </div>
    </header>
  );
}

export default Header;

