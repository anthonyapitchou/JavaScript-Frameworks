"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#EAF4F8]">
      <h1 className="text-4xl font-bold mb-8 text-black">Contact Us</h1>
      <p className= "text-center max-w-3xl px-4 mb-8 text-black"> If you have any questions about our collections, your order or our online shop, please contact our Customer Service team by completing the form below. 
        We would be happy to help. </p>
        <form
          className="flex flex-col gap-4 w-full max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}>


          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 text-black rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300  text-black rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 text-black rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </main>
);
}

