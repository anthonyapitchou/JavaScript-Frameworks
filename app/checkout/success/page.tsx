import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-8 text-center">
      <h1 className="text-4xl font-normal mb-6">
        Thank you for your order!
      </h1>

      <p className="text-gray-600 mb-8">
        Your order has been successfully placed.
      </p>

      <Link
        href="/search"
        className="bg-black text-white px-8 py-4 hover:opacity-70"
      >
        CONTINUE SHOPPING
      </Link>
    </main>
  );
}