
"use client";

import { useState } from "react";

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Full Name must be at least 3 characters.";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setIsSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10 sm:py-12 px-4 bg-[#EAF4F8]">

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-black text-center">
        Contact Us
      </h1>

      <p className="text-center max-w-3xl px-2 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed text-black">
        If you have any questions about our collections, your order or our
        online shop, please contact our Customer Service team by completing
        the form below. We would be happy to help.
      </p>

      <form
        className="flex flex-col gap-4 w-full max-w-xl"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 text-black rounded-md py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 text-black rounded-md py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 text-black rounded-md py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 text-black rounded-md py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Send Message
        </button>

        {isSubmitted && (
          <p className="text-green-700 text-center" role="status">
            Your form has been validated successfully.
          </p>
        )}
      </form>
    </main>
  );
}
