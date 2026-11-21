
"use client";

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

  function handleAddToCart() {
    addToCart({
      id: String(product.id),
      title: product.title,
      price: source === "api"
        ? product.discountedPrice ?? product.price
        : product.price,
      image: product.image,
      source,
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-blue-500 text-white py-4 mt-10 hover:bg-blue-600 transition-colors duration-300"
    >
      ADD TO CART
    </button>
  );
}