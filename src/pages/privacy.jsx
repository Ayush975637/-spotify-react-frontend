// app/privacy.tsx OR pages/privacy.tsx

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your personal data when you use our app or website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Your name, email address, and contact info</li>
        <li>Financial or transactional data (if applicable)</li>
        <li>Usage data (like browser info or device type)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to operate the app, improve your experience, and communicate with you. We do not sell your data to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We only share your data with trusted partners or when required by law. We ensure all partners follow similar privacy standards.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Security</h2>
      <p className="mb-4">
        We implement strong security measures to protect your data, but no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at: <strong>support@example.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Please review it periodically.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last Updated: July 2025
      </p>
    </div>
  );
}
