import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Vidoro, you agree to be bound by these Terms of Service. If you do not agree to these
            terms, please do not use our services.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access and use Vidoro for personal, non-commercial purposes. This
            license does not include:
          </p>
          <ul>
            <li>Modifying or copying our materials</li>
            <li>Using materials for commercial purposes</li>
            <li>Attempting to reverse engineer any software</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            Our services are provided "as is". Vidoro makes no warranties, expressed or implied, and hereby disclaims
            all warranties, including without limitation implied warranties.
          </p>
        </div>
      </div>
    </div>
  );
}