import React from "react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-24 font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Vidoro Documentation
        </h1>
        <p className="text-gray-300 leading-relaxed text-center mb-12">
          Welcome to the Vidoro Documentation! This page provides detailed
          information about our services, pricing, processes, and how we work
          with our clients. Please read through this documentation to understand
          how we can help you expand your YouTube reach to the Indian market.
        </p>

        <div className="space-y-10">
          {/* 1. About Vidoro */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              1. About Vidoro
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Vidoro is a content agency specializing in translating English
              language YouTube videos into Hindi. We help English-speaking
              YouTubers reach a massive Indian audience, enabling them to
              increase their revenue and brand recognition with minimal effort
              on their part.
            </p>
          </div>

          {/* 2. Why Translate to Hindi? */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              2. Why Translate to Hindi?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Massive Audience:</strong>{" "}
                India has the largest internet user base globally, with the
                highest number of YouTube users.
              </li>
              <li>
                <strong className="text-gray-200">Untapped Potential:</strong>{" "}
                Many YouTubers are already seeing India as a top viewership
                country, indicating significant untapped potential for Hindi
                content.
              </li>
              <li>
                <strong className="text-gray-200">Growing Demand:</strong> The
                demand for content like yours is increasing every day in India.
              </li>
              <li>
                <strong className="text-gray-200">Revenue Growth:</strong> By
                translating into Hindi, you tap into a new audience resulting in
                potential ad revenue and sponsorship opportunities.
              </li>
              <li>
                <strong className="text-gray-200">Proven Success:</strong> Many
                Indian YouTubers in similar niches are getting millions of
                views, demonstrating the market potential.
              </li>
              <li>
                <strong className="text-gray-200">
                  Best Time to Start:
                </strong>{" "}
                Now is the ideal time to create videos for the 400 million+
                Indian YouTube audience.
              </li>
            </ul>
          </div>

          {/* 3. Our Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              3. Our Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Vidoro provides a comprehensive translation and localization
              service that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Translation:</strong> Accurate
                translation of your English video scripts into Hindi.
              </li>
              <li>
                <strong className="text-gray-200">Voiceovers:</strong>{" "}
                Professional Hindi voiceover recordings tailored to your
                content.
              </li>
              <li>
                <strong className="text-gray-200">Video Editing:</strong>{" "}
                Adjustments and editing of your videos to suit the preferences
                of the Indian audience.
              </li>
              <li>
                <strong className="text-gray-200">
                  Sponsorship Assistance:
                </strong>{" "}
                We assist in finding sponsors for your translated videos within
                the Indian market.
              </li>
            </ul>
          </div>

          {/* 4. What We Handle */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              4. What We Handle
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We handle everything from translation to editing and adjustments
              for the Indian audience. You don't need to worry about finding
              voice-over artists, editors, etc.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Experienced Team:</strong> We
                have a team of experienced and talented individuals to handle
                all aspects of the process.
              </li>
              <li>
                <strong className="text-gray-200">
                  All-Inclusive Service:
                </strong>{" "}
                We take care of everything necessary to make your video ready
                for the Indian audience.
              </li>
            </ul>
          </div>

          {/* 5. What We Need From You */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              5. What We Need From You
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To begin the translation process, we primarily need:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">
                  English Video Script:
                </strong>{" "}
                The transcript of your English video.
              </li>
              <li>
                <strong className="text-gray-200">
                  Video Assets (Optional):
                </strong>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-6 text-gray-300 leading-relaxed">
                  <li>
                    <strong className="text-gray-200">
                      Option 1 (Preferred): Full Project File:
                    </strong>{" "}
                    If possible, provide the complete editing project file
                    compatible with popular editing software like Final Cut Pro,
                    Adobe Premiere Pro, After Effects, or DaVinci Resolve.
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-6 text-gray-300 leading-relaxed">
                      <li>
                        Include the folder containing all assets used in the
                        video (images, audio files, other media).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-gray-200">
                      Option 2: Separate Files (If Full Project is Not
                      Possible):
                    </strong>
                    <ul className="list-disc list-inside space-y-2 mt-3 ml-6 text-gray-300 leading-relaxed">
                      <li>The edited video file.</li>
                      <li>Separate voiceover audio file.</li>
                      <li>Separate background sound audio file.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 6. How We Handle Your Data and Assets */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              6. How We Handle Your Data and Assets
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Secure Handling:</strong> We
                will handle your video assets and files with complete care and
                professionalism.
              </li>
              <li>
                <strong className="text-gray-200">Storage:</strong> We will
                keep the project files secure until the video is delivered and
                any revisions are completed.
              </li>
              <li>
                <strong className="text-gray-200">
                  Usage for Portfolio:
                </strong>{" "}
                We may showcase anonymized examples on our website for
                demonstration purposes. You can request that we do not include
                it in our portfolio.
              </li>
            </ul>
          </div>

          {/* 7. Pricing */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              7. Pricing
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We offer a simple, all-inclusive pricing model:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Flat Rate:</strong> $10 USD
                per minute of video.
              </li>
              <li>
                <strong className="text-gray-200">All-Inclusive:</strong> This
                price includes voiceovers, editing, translation, and all other
                necessary services.
              </li>
              <li>
                <strong className="text-gray-200">Example Cost:</strong> For a
                10-minute video, the cost would be $100 USD.
              </li>
            </ul>
          </div>

          {/* 8. Payment Methods */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              8. Payment Methods
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We accept payments through various methods for your convenience:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300 leading-relaxed">
              <li>PayPal</li>
              <li>Credit Card</li>
              <li>Bank Transfer</li>
              <li>Cryptocurrency</li>
            </ul>
          </div>

          {/* 9. Delivery Time */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              9. Delivery Time
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our standard delivery time for translated videos is between 12-48
              hours after we have received all required project assets. Delivery
              times may vary depending on complexity and project queue.
            </p>
          </div>

          {/* 10. Revisions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              10. Revisions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We offer unlimited revisions until you, the client, are satisfied
              with the final product. Please provide clear and specific feedback
              when requesting revisions.
            </p>
          </div>

          {/* 11. Refunds */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              11. Refunds
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Refunds will only be provided in exceptional circumstances where
              the issue is demonstrably a fault on Vidoro's side, such as
              failure to deliver the agreed-upon services or significant errors
              not resolvable through revisions. We do not offer refunds for
              changes in the client's marketing plans or user satisfaction.
            </p>
          </div>

          {/* 12. Intellectual Property */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              12. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Client Ownership:</strong> You
                retain full ownership of the intellectual property rights for
                your original video content and the translated content we
                produce.
              </li>
              <li>
                <strong className="text-gray-200">License:</strong> By
                submitting your video scripts and/or project files to Vidoro,
                you grant us a license to use, reproduce, and modify your
                content solely for the purpose of providing our translation
                services.
              </li>
            </ul>
          </div>

          {/* 13. Confidentiality */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              13. Confidentiality
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We treat all client information with the utmost confidentiality.
              We will not disclose your confidential information to any third
              party without your prior consent, except as required by law.
            </p>
          </div>

          {/* 14. Important Considerations */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              14. Important Considerations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-200">Lower Indian CPM:</strong> The
                CPM (Cost Per Mille - cost per thousand views) in India is
                generally lower compared to Western audiences.
              </li>
              <li>
                <strong className="text-gray-200">
                  High Volume of Views:
                </strong>{" "}
                The tremendously larger audience size in India compensates for
                the lower CPM, resulting in significant overall revenue
                potential.
              </li>
            </ul>
          </div>

          {/* 15. Contact Us */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              15. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or would like to get started, please
              contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:contact@vidoro.agency"
                className="text-blue-400 hover:underline"
              >
                contact@vidoro.agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}