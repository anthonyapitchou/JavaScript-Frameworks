
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import localProducts from "../data/products.json";
import { getProducts, type Product } from "../lib/api";

type LocalProduct = (typeof localProducts)[number];

type SearchProduct = {
  id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  rating?: number;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  source: "local" | "api";
};

const categories = {
  men: ["All", "Jacket", "Suit", "Trousers", "Hat", "Shirt", "Braces", "Coat"],
  women: ["All", "Shirt", "Dress", "Jacket", "Sunglasses", "Suit", "Denim"],
  products: ["All", "Fashion", "Beauty", "Electronics", "Accessories", "Other"],
};

function getApiCategory(tags: string[]) {
  if (tags.some((tag) =>
    ["fashion", "bags", "shoes", "glasses", "jewelry"].includes(tag)
  )) return "Fashion";

  if (tags.some((tag) =>
    ["beauty", "perfume", "skin care", "shampoo"].includes(tag)
  )) return "Beauty";

  if (tags.some((tag) =>
    ["electronics", "headphones", "audio", "storage", "peripherals", "gaming", "computers"].includes(tag)
  )) return "Electronics";

  if (tags.some((tag) =>
    ["accessories", "watches", "watch", "wearables"].includes(tag)
  )) return "Accessories";

  return "Other";
}

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("men");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiProducts, setApiProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then(setApiProducts)
      .catch((error) => {
        console.error("API error:", error);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const localItems: SearchProduct[] = (
    localProducts as LocalProduct[]
  ).map((product) => ({
    id: String(product.id),
    title: product.title,
    price: product.price,
    image: product.image,
    tags: product.tags,
    source: "local",
  }));

  const apiItems: SearchProduct[] = apiProducts.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    discountedPrice: product.discountedPrice,
    rating: product.rating,
    image: product.image,
    tags: product.tags,
    source: "api",
  }));

  const selectedProducts =
    activeTab === "products"
      ? apiItems
      : localItems.filter((product) =>
          product.tags.includes(activeTab)
        );

  const filteredProducts = selectedProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      (activeTab === "products"
        ? getApiCategory(product.tags) === selectedCategory
        : product.tags.some(
            (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
          ));

    return matchesSearch && matchesCategory;
  });

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-white text-black px-5 sm:px-8 py-8 sm:py-12">

      <h1 className="text-3xl sm:text-4xl font-medium mb-8">
        Search
      </h1>

      {/* Search input */}
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full border border-gray-300 px-4 py-3 mb-6 outline-none focus:border-black text-sm sm:text-base"
      />

      {/* Main navigation */}
      <div className="flex flex-wrap gap-3 mb-5">
        {["men", "women", "products"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => changeTab(tab)}
            className={`px-6 py-2 text-sm sm:text-base border transition-colors ${
              activeTab === tab
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Subcategory buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories[activeTab as keyof typeof categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-xs sm:text-sm border transition-colors ${
              selectedCategory === category
                ? "bg-gray-200 text-black border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading and error messages */}
      {loading && activeTab === "products" && (
        <p className="text-sm sm:text-base">Loading products...</p>
      )}

      {error && activeTab === "products" && (
        <p className="text-sm sm:text-base text-red-600 mb-6">
          Could not load API products.
        </p>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="text-sm sm:text-base mb-6">No products found.</p>
      )}

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-6">

        {filteredProducts.map((product) => {
          const hasDiscount =
            product.source === "api" &&
            product.discountedPrice !== undefined &&
            product.discountedPrice < product.price;

          const discountPercentage = hasDiscount
            ? Math.round(
                ((product.price - product.discountedPrice!) / product.price) * 100
              )
            : 0;

          return (
            <Link
              key={`${product.source}-${product.id}`}
              href={
                product.source === "local"
                  ? `/product/${product.id}`
                  : `/api-product/${product.id}`
              }
              className="block min-w-0"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image.url}
                  alt={product.image.alt}
                  width={500}
                  height={650}
                  className="w-full aspect-3/4 object-cover hover:scale-105 transition-transform duration-300"
                />

                {hasDiscount && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-2">
                    -{discountPercentage}%
                  </span>
                )}
              </div>

              {/* Product Information */}
              <div className="flex flex-col gap-1 mt-3">
                <p className="text-sm sm:text-base leading-snug">
                  {product.title}
                </p>

                {product.source === "api" && product.rating !== undefined && (
                  <p className="text-sm text-yellow-600">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                    <span className="text-gray-500 ml-2">
                      {product.rating.toFixed(1)}/5
                    </span>
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                  {hasDiscount ? (
                    <>
                      <span className="text-gray-400 line-through">
                        {product.price.toFixed(2)} SEK
                      </span>

                      <span className="text-gray-700">
                        {product.discountedPrice!.toFixed(2)} SEK
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-700">
                      {product.price} SEK
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}

      </div>

    </main>
  );
}
