# Vintage Studio

A responsive online fashion store built as part of the JavaScript Frameworks course at Noroff.

Vintage Studio is an online shop where users can browse products, search for items, view product details, add products to a shopping cart, and complete a checkout.

## Features

- Browse men's and women's collections
- View product details, descriptions, prices, ratings, and reviews
- Search for products
- Add and remove products from the shopping cart
- Update product quantities
- View the cart total
- Complete the checkout process
- Receive an order confirmation
- Contact form
- Responsive layout for desktop and mobile

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Noroff Online Shop API
- Local Storage

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/anthonyapitchou/JavaScript-Frameworks.git
```

Navigate to the project folder:

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

## API

Product data is retrieved from the Noroff Online Shop API.

- `GET /online-shop` – Retrieve all products
- `GET /online-shop/{id}` – Retrieve a single product

## Project Structure

- `app/` – Application pages and routes
- `components/` – Reusable React components
- `app/cart/` – Shopping cart context and functionality
- `app/lib/` – API helper functions

## Deployment

The project is intended to be deployed using a platform that supports Next.js, such as Vercel.

## Author

Anthony Apicella

Developed as part of the JavaScript Frameworks course at Noroff.