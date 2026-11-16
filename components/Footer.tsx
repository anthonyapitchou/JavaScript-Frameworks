import Link from "next/link";
import Image from "next/image";


function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-200 px-8 py-10">

      {/* Footer columns */}
      <div className="grid grid-cols-3 gap-8">

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
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-50 transition-opacity">
            Instagram
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-50 transition-opacity">
            Pinterest
          </a>
        </div>

      </div>

      {/* Bottom section */}
      <div className="flex items-center justify-between border-t border-gray-200 mt-10 pt-6">

        <Link href="/">
          <Image
            src="/images/Vintage-Studio-Logo.png"
            alt="Vintage Studio"
            width={150}
            height={55}
          />
        </Link>

        <div className="flex items-center gap-4 text-xs">
          <Link href="/privacy" className="hover:opacity-50 transition-opacity">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-50 transition-opacity">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          © 2026 Vintage Studio
        </p>

      </div>
    </footer>
  );
}

export default Footer;
