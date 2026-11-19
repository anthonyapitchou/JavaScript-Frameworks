import { getProducts } from "../lib/api";


export default async function TestApiPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        API Test - Vintage Studio
      </h1>

      {products.map((product) => (
        <div key={product.id} className="mb-4">
          <h2>{product.title}</h2>
          <p>{product.price} SEK</p>
        </div>
      ))}
    </main>
  );
}