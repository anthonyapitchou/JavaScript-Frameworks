"use client";

import { useCart } from "../app/cart/CartContext";

export default function AddToCartButton({ product }: { product: {
  id: string | number;
  title: string;
  price: number;
  image: { url: string; alt: string };
} }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: String(product.id),
          title: product.title,
          price: product.price,
          image: product.image,
          source: "local",
        })
      }
      className="w-full bg-blue-500 text-white py-4 mt-10 hover:bg-blue-600 transition-colors duration-300"
    >
      ADD TO CART
    </button>
  );
}