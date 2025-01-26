import React from "react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose prose-invert max-w-none">
          <h2>Getting Started</h2>
          <p>Welcome to Vidoro documentation! Here you'll find everything you need to know about using our platform.</p>

          <h2>Quick Start Guide</h2>
          <ol>
            <li>Create an account</li>
            <li>Set up your profile</li>
            <li>Upload your first video</li>
            <li>Share with your audience</li>
          </ol>

          <h2>Features</h2>
          <ul>
            <li>HD Video Hosting</li>
            <li>Analytics Dashboard</li>
            <li>Customizable Player</li>
            <li>API Access</li>
          </ul>

          <h2>API Documentation</h2>
          <p>
            Our REST API allows you to integrate Vidoro's features into your own applications. See the API reference for
            detailed documentation.
          </p>
        </div>
      </div>
    </div>
  );
}