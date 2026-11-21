
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket, Mail, Menu, X } from "lucide-react";
import { useCart } from "../app/cart/CartContext";

function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="relative w-full bg-white text-black">

      {/* MOBILE HEADER */}
      <div className="flex md:hidden items-center justify-between px-5 py-3">

        {/* Spacer to keep logo centered */}
        <div className="w-10" />

        {/* Center logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/Vintage-Studio-Logo.png"
            alt="Vintage Studio"
            width={250}
            height={90}
            priority
            className="w-32 h-auto"
          />
        </Link>

        {/* Burger button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex w-10 justify-end"
        >
          {isMenuOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <nav className="md:hidden absolute left-0 top-full z-50 w-full bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-center gap-6 py-8">

            <Link href="/women" onClick={closeMenu}>
              Women
            </Link>

            <Link href="/men" onClick={closeMenu}>
              Men
            </Link>

            <Link
              href="/search"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <Search size={18} strokeWidth={1.5} />
              Search
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <Mail size={18} strokeWidth={1.5} />
              Contact Us
            </Link>

            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <ShoppingBasket size={18} strokeWidth={1.5} />
              Basket ({cartCount})
            </Link>

          </div>
        </nav>
      )}

      {/* DESKTOP HEADER - ORIGINAL STRUCTURE */}
      <div className="hidden md:grid grid-cols-3 items-center px-8 py-5">

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
          <Link
            href="/search"
            aria-label="Search"
            className="hover:opacity-50 transition-opacity"
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>

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
            aria-label={`Basket, ${cartCount} items`}
            className="relative hover:opacity-50 transition-opacity"
          >
            <ShoppingBasket size={20} strokeWidth={1.5} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

    </header>
  );
}

export default Header;
