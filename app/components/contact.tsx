"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_pki7w44";
    const templateID =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_73y3nu3";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "v4xrfO__Rz_U3roqy";

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        console.log("EmailJS success:", result.text);
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ fullName: "", email: "", message: "" });
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("EmailJS error:", error);
        // Optionally handle error state here (e.g., show error message)
      });
  };

  return (
    <section className="py-12 px-6 sm:px-8">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-black mb-4 text-start">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-8 text-start text-base leading-relaxed">
          I&apos;m always interested in exploring new opportunities,
          collaborating, or exchanging ideas with like-minded individuals. Feel
          free to book a call or email me if you&apos;d like to see my portfolio
          deck or discuss a potential project.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white  rounded-lg "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Write your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-white py-3 px-6 rounded-md font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
          >
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-700 font-medium text-center">
              Message sent successfully!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
