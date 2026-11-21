# Vintage Studio

A responsive online fashion store developed as part of the JavaScript Frameworks course at Noroff.

Vintage Studio allows users to browse clothing collections, search for products, view product details, manage a shopping cart, and complete the checkout process.

## Live Demo

[Visit Vintage Studio](https://java-script-frameworks-eqe3.vercel.app/)

## Features

- Browse men's and women's collections.
- View product details, descriptions, prices, and images.
- Retrieve products from the Noroff Online Shop API.
- Search for products.
- Add products to the shopping cart.
- Update product quantities and remove items.
- View the total price of the cart.
- Complete the checkout process.
- Receive an order confirmation.
- Contact form with input validation.
- Responsive design for desktop, tablet, and mobile.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Noroff Online Shop API
- React Context API
- Local Storage

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

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

Product data is retrieved from the Noroff Online Shop API.

- `GET /online-shop` – Retrieves all products.
- `GET /online-shop/{id}` – Retrieves a single product by ID.

## Project Structure

- `app/` – Application pages and routes.
- `app/cart/` – Shopping cart context and functionality.
- `app/lib/` – API helper functions.
- `components/` – Reusable React components.
- `app/data/` – Local product data.

## Deployment

The application is deployed using Vercel.

[https://java-script-frameworks-eqe3.vercel.app/](https://java-script-frameworks-eqe3.vercel.app/)

## Author

Anthony Apicella

Developed as part of the JavaScript Frameworks course at Noroff.