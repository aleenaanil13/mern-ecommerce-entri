import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6">
          At our ecommerce store, we are committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our website. Please read this policy
          carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-6">
          We may collect information about you in a variety of ways. The information we may collect on the website includes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Personal Data: Name, email address, shipping address, and phone number.</li>
          <li>Financial Data: Payment method details, billing information.</li>
          <li>Transaction Data: Details of your purchases and order history.</li>
          <li>Technical Data: IP address, browser type, operating system, and usage data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you about your orders, requests, or inquiries.</li>
          <li>To improve our website and services through analytics and feedback.</li>
          <li>To send you marketing communications, where you have opted in to receive them.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized
          access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="mb-6">
          We do not sell, trade, or rent your personal information to others. We may share your data with trusted third-party
          service providers for the purposes of fulfilling your order, providing customer support, and processing payments.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-6">
          You have the right to request access to the personal data we hold about you. You may also request corrections,
          updates, or deletions of your personal information. To exercise your rights, please contact our customer support.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes we make will be posted on this page, and, where
          appropriate, we will notify you via email or other means.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal data, please feel free to contact
          us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
