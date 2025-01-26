import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <h2>Data Collection</h2>
          <p>We collect information that you provide directly to us, including when you:</p>
          <ul>
            <li>Create an account</li>
            <li>Use our services</li>
            <li>Contact us for support</li>
          </ul>

          <h2>Use of Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send important notifications</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </div>
      </div>
    </div>
  );
}