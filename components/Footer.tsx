
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-200 px-5 sm:px-8 py-10">

      {/* Footer columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 justify-items-center text-center">

        {/* Customer Care */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">
            CUSTOMER CARE
          </h3>

          <Link href="/contact" className="text-sm hover:opacity-50 transition-opacity">
            Contact
          </Link>

          <Link href="/faq" className="text-sm hover:opacity-50 transition-opacity">
            FAQ
          </Link>

          <Link href="/shipping" className="text-sm hover:opacity-50 transition-opacity">
            Shipping
          </Link>

          <Link href="/returns" className="text-sm hover:opacity-50 transition-opacity">
            Returns
          </Link>
        </div>

        {/* About */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">
            ABOUT
          </h3>

          <Link href="/about" className="text-sm hover:opacity-50 transition-opacity">
            Our Story
          </Link>

          <Link href="/about" className="text-sm hover:opacity-50 transition-opacity">
            About Us
          </Link>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider">
            FOLLOW US
          </h3>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
          >
            Instagram
          </a>

          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
          >
            Pinterest
          </a>
        </div>

      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-6 border-t border-gray-200 mt-10 pt-8 md:flex-row md:justify-between md:gap-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Vintage-Studio-Logo.png"
            alt="Vintage Studio"
            width={150}
            height={55}
            className="w-32 h-auto"
          />
        </Link>

        {/* Legal links */}
        <div className="flex flex-col items-center gap-3 text-xs sm:flex-row sm:gap-6">
          <Link
            href="/privacy"
            className="hover:opacity-50 transition-opacity"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="hover:opacity-50 transition-opacity"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © 2026 Vintage Studio
        </p>

      </div>
    </footer>
  );
}

export default Footer;

