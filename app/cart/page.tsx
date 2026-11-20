
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-white text-black px-8 py-12">
      <h1 className="text-4xl font-normal mb-10">Your Shopping Bag</h1>

      {cart.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg mb-6">Your bag is empty.</p>

          <Link
            href="/search"
            className="inline-block bg-black text-white px-8 py-4 hover:opacity-70"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Cart Products */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div
                key={`${item.source}-${item.id}`}
                className="flex gap-6 border-b pb-8"
              >
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={160}
                  height={200}
                  className="w-32 h-40 object-cover"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-lg font-medium">
                      {item.title}
                    </h2>

                    <p className="mt-2">{item.price} SEK</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.source,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity === 1}
                      className="border px-3 py-1 disabled:opacity-30"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.source,
                          item.quantity + 1
                        )
                      }
                      className="border px-3 py-1"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.source)
                      }
                      className="ml-4 text-sm underline hover:opacity-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="border p-6 h-fit">
            <h2 className="text-xl font-medium mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span className="font-semibold">
                {total.toFixed(2)} SEK
              </span>
            </div>

            <button
              disabled
              className="w-full bg-gray-400 text-white py-4 cursor-not-allowed"
            >
              CHECKOUT
            </button>

            <Link
              href="/search"
              className="block text-center underline text-sm mt-6"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
