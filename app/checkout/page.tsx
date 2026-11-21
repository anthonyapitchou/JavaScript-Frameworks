
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../cart/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) return;

    clearCart();
    router.push("/checkout/success");
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white text-black px-8 py-16 text-center">
        <h1 className="text-3xl mb-6">Your bag is empty</h1>
        <Link href="/search" className="underline">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-8 py-12">
      <h1 className="text-4xl font-normal mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Customer Information */}
        <section>
          <h2 className="text-xl font-medium mb-6">
            Delivery Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                minLength={3}
                required
                className="w-full border border-gray-300 p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full border border-gray-300 p-3"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-2">
                Delivery Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                minLength={5}
                required
                rows={4}
                className="w-full border border-gray-300 p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors"
            >
              PLACE ORDER
            </button>
          </form>
        </section>

        {/* Order Summary */}
        <section>
          <h2 className="text-xl font-medium mb-6">
            Order Summary
          </h2>

          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.source}-${item.id}`}
                className="flex gap-4 border-b pb-6"
              >
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={100}
                  height={130}
                  className="w-24 h-28 object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Quantity: {item.quantity}
                  </p>
                  <p className="mt-2">
                    {(item.price * item.quantity).toFixed(2)} SEK
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-semibold text-lg mt-8">
            <span>Total</span>
            <span>{total.toFixed(2)} SEK</span>
          </div>
        </section>
      </div>
    </main>
  );
}
