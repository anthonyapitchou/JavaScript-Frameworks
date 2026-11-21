
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

  function handleCheckout() {
    window.location.href = "/checkout";
  }

  return (
    <main className="min-h-screen bg-white text-black px-5 sm:px-8 py-8 sm:py-12">

      <h1 className="text-3xl sm:text-4xl font-normal mb-8 sm:mb-10">
        Your Shopping Bag
      </h1>

      {cart.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-base sm:text-lg mb-6">
            Your bag is empty.
          </p>

          <Link
            href="/search"
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:opacity-70"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Cart Products */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {cart.map((item) => (
              <div
                key={`${item.source}-${item.id}`}
                className="flex gap-4 sm:gap-6 border-b pb-6 sm:pb-8 min-w-0"
              >

                {/* Product Image */}
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={160}
                  height={200}
                  className="w-28 h-36 sm:w-32 sm:h-40 object-cover shrink-0"
                />

                {/* Product Information */}
                <div className="flex flex-col justify-between flex-1 min-w-0 gap-4">

                  <div>
                    <h2 className="text-base sm:text-lg font-medium leading-snug">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm sm:text-base">
                      {item.price} SEK
                    </p>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">

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

                    <span className="text-sm sm:text-base">
                      {item.quantity}
                    </span>

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
                      className="text-sm underline hover:opacity-50"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="border p-5 sm:p-6 h-fit">

            <h2 className="text-lg sm:text-xl font-medium mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between items-center gap-3 mb-6 text-sm sm:text-base">
              <span>Total</span>

              <span className="font-semibold whitespace-nowrap">
                {total.toFixed(2)} SEK
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white text-sm sm:text-base py-3 px-4 hover:bg-gray-800 transition-colors"
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
