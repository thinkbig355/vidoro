import React from "react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-24 font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          We Want Your Feedback!
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-center mb-8">
            Your feedback is incredibly valuable to us. It helps us make Vidoro
            better for everyone. Let us know what you think, what you love, and
            what you think we can improve.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Ways to Share Your Thoughts
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed mb-8">
            <li>
              <strong className="text-gray-200">
                Suggest New Features:
              </strong>{" "}
              Have an idea that would make Vidoro even more awesome? Tell us
              about it!
            </li>
            <li>
              <strong className="text-gray-200">
                Report Bugs or Issues:
              </strong>{" "}
              Did you encounter a glitch? Let us know so we can fix it.
            </li>
            <li>
              <strong className="text-gray-200">
                Share Your Success Stories:
              </strong>{" "}
              Has Vidoro helped you achieve your goals? We'd love to hear about
              it!
            </li>
            <li>
              <strong className="text-gray-200">
                Give General Feedback:
              </strong>{" "}
              Any other thoughts or suggestions? We're all ears!
            </li>
          </ul>

          <div className="text-center">
            <p className="text-gray-300 leading-relaxed mb-4">
              Send your feedback to:
            </p>
            <a
              href="mailto:feedback@vidoro.agency"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg inline-block text-lg"
            >
              feedback@vidoro.agency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}