import React from "react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Feedback</h1>
        <div className="prose prose-invert max-w-none">
          <p>
            We value your feedback! Your input helps us improve Vidoro and provide a better experience for all users.
          </p>

          <h2>Ways to Provide Feedback</h2>
          <ul>
            <li>Submit feature requests</li>
            <li>Report bugs or issues</li>
            <li>Share your success stories</li>
            <li>Suggest improvements</li>
          </ul>

          <p>Please email your feedback to: feedback@vidoro.com</p>
        </div>
      </div>
    </div>
  );
}