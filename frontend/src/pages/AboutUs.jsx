import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-emerald-500 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Welcome to Our Eco-Friendly Fashion Store
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At our ecommerce store, we believe that fashion can be both stylish
            and sustainable. We are passionate about bringing you the latest
            trends in eco-friendly fashion, offering a wide range of clothing,
            accessories, and footwear made from sustainable materials.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our mission is to revolutionize the fashion industry by promoting
            ethical and sustainable practices. We strive to provide high-quality
            products that not only look good but also make a positive impact on
            the environment.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>🌱 <span className="font-bold">Sustainability</span> – Reducing waste and using eco-friendly materials.</li>
            <li>✨ <span className="font-bold">Quality</span> – Delivering top-notch products to our customers.</li>
            <li>💚 <span className="font-bold">Integrity</span> – Promoting ethical practices and transparency.</li>
            <li>🌍 <span className="font-bold">Community</span> – Supporting environmental causes and giving back.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
