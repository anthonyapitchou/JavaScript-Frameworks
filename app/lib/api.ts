const API_URL = "https://v2.api.noroff.dev/online-shop";


// Review interface
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

// Product interface
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}



export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
}


export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();

  return result.data;
}

