# Vintage Studio

Vintage Studio is a responsive online fashion store developed as part of the JavaScript Frameworks course at Noroff.

The project is built with Next.js, React and TypeScript. It combines locally stored products with product data fetched from the Noroff Online Shop API.

## Live Demo

[View Vintage Studio](https://java-script-frameworks-eqe3.vercel.app/)

## Features

- **Product Catalogue:** Browse fashion products from local data and the Noroff API.
- **Product Details:** View product images, descriptions, prices, ratings, reviews and tags when available.
- **Discounts:** Display original prices, discounted prices and discount percentage labels.
- **Search:** Search and filter products dynamically.
- **Shopping Cart:** Add and remove products, update quantities and calculate the total price.
- **Cart Persistence:** Cart contents are saved in localStorage.
- **Notifications:** Toast messages confirm when products are added to or removed from the cart.
- **Checkout:** Complete the checkout flow and receive an order confirmation.
- **Contact Form:** Client-side form validation with error messages for invalid input.
- **Responsive Design:** Layout adapted for desktop, tablet and mobile screens.
- **Loading and Error States:** Feedback when product data is loading or cannot be retrieved.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Noroff Online Shop API
- localStorage
- Vercel

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/anthonyapitchou/JavaScript-Frameworks.git
```

Navigate to the project directory:

```bash
cd JavaScript-Frameworks
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## API Integration

The project uses the Noroff Online Shop API to retrieve product information.

- `GET /online-shop` – Retrieve products.
- `GET /online-shop/{id}` – Retrieve an individual product.

Local product data is also used alongside API products.

## Deployment

The application is deployed using Vercel.

[Visit the live website](https://java-script-frameworks-eqe3.vercel.app/)

## Author

Anthony Apicella

Noroff – JavaScript Frameworks Course
