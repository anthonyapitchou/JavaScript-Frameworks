
"use client";

import { useState } from "react";
import { useCart } from "../app/cart/CartContext";

type AddToCartButtonProps = {
  product: {
    id: string | number;
    title: string;
    price: number;
    discountedPrice?: number;
    image: {
      url: string;
      alt: string;
    };
  };
  source: "local" | "api";
};

export default function AddToCartButton({
  product,
  source,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  function handleAddToCart() {
    addToCart({
      id: String(product.id),
      title: product.title,
      price:
        source === "api"
          ? product.discountedPrice ?? product.price
          : product.price,
      image: product.image,
      source,
    });

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-white py-4 mt-10 hover:bg-blue-600 transition-colors duration-300"
      >
        ADD TO CART
      </button>

      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-5 right-5 z-50 bg-white text-black border border-gray-200 shadow-lg px-6 py-4"
        >
          Product added to cart!
        </div>
      )}
    </>
  );
}
