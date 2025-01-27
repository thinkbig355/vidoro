import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-24 font-sans">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Vidoro Privacy Policy
        </h1>
        <p className="text-sm mb-12 text-center">
          <strong>Effective Date:</strong> January 27, 2025
        </p>

        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed">
            Vidoro LLC ("Vidoro," "we," "us," or "our") is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our website and services. By using our services, you consent to the
            practices described in this Privacy Policy.
          </p>

          {/* Section 1: Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We collect the following types of information:
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
              Information You Provide Directly:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-1">
              <li>
                <strong className="text-gray-200">Contact Information:</strong>{" "}
                When you contact us for inquiries or to engage our services, we
                may collect your name, email address, phone number, and any
                other contact information you provide.
              </li>
              <li>
                <strong className="text-gray-200">Project Information:</strong>{" "}
                When you engage our services, we collect information related to
                your project, which may include video scripts, project files,
                video assets (images, audio files, etc.), channel details, and
                specific instructions.
              </li>
              <li>
                <strong className="text-gray-200">Payment Information:</strong>{" "}
                When you make payments, we collect necessary billing and
                transaction details. Note: We do not directly store your full
                credit card information, as payment processing is handled by
                secure third-party providers.
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
              Information Collected Automatically:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-1">
              <li>
                <strong className="text-gray-200">Website Usage Data:</strong>{" "}
                When you visit our website, we may automatically collect
                information such as your IP address, browser type, operating
                system, pages visited, and other website usage data. We use
                cookies and similar tracking technologies for this purpose.
              </li>
              <li>
                <strong className="text-gray-200">Device Information:</strong>{" "}
                We may collect information about the device you use to access
                our website, including the device type and settings.
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-gray-200">Providing Services:</strong>{" "}
                To perform our services, including translating video content,
                voiceover recording, video editing, and assisting in finding
                sponsorship opportunities.
              </li>
              <li>
                <strong className="text-gray-200">Communication:</strong> To
                communicate with you about your project, respond to inquiries,
                provide updates, and offer customer support.
              </li>
              <li>
                <strong className="text-gray-200">Payment Processing:</strong>{" "}
                To process payments for our services and send invoices.
              </li>
              <li>
                <strong className="text-gray-200">Improving Services:</strong>{" "}
                To analyze usage patterns, improve our website and services, and
                develop new features.
              </li>
              <li>
                <strong className="text-gray-200">Personalization:</strong> To
                personalize your experience on our website and to offer content
                and features that are relevant to you.
              </li>
              <li>
                <strong className="text-gray-200">Security:</strong> To protect
                the security and integrity of our website and services, and to
                prevent fraudulent activity.
              </li>
              <li>
                <strong className="text-gray-200">
                  Legal Compliance:
                </strong>{" "}
                To comply with legal obligations and regulatory requirements.
              </li>
            </ul>
          </div>

          {/* Section 3: How We Share Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-gray-200">Service Providers:</strong> We
                may share your information with trusted third-party service
                providers who assist us in providing services, such as payment
                processors, cloud storage providers, and technical support
                partners. These service providers are contractually obligated to
                protect your information and are not authorized to use it for
                their own purposes.
              </li>
              <li>
                <strong className="text-gray-200">Legal Requirements:</strong>{" "}
                We may disclose your information to legal authorities if
                required by law or if we believe that such disclosure is
                necessary to comply with legal processes, protect our rights, or
                ensure the safety of others.
              </li>
              <li>
                <strong className="text-gray-200">Business Transfers:</strong>{" "}
                In the event of a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as
                part of the transaction. We will notify you of any such change.
              </li>
              <li>
                <strong className="text-gray-200">With Your Consent:</strong> We
                will share your information with other parties when you give us
                your explicit consent to do so.
              </li>
            </ul>
          </div>

          {/* Section 4: Data Security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We take reasonable measures to protect your information from
              unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-gray-200">Secure Storage:</strong> We
                store your data on secure servers and use encryption to protect
                sensitive data.
              </li>
              <li>
                <strong className="text-gray-200">Access Controls:</strong> We
                limit access to your information to only authorized personnel
                who need it to perform their tasks.
              </li>
              <li>
                <strong className="text-gray-200">
                  Third-Party Security:
                </strong>{" "}
                We only partner with third-party providers who implement
                appropriate security measures to protect your information.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              While we strive to protect your personal information, please be
              aware that no method of transmission over the internet or
              electronic storage is 100% secure.
            </p>
          </div>

          {/* Section 5: Data Retention */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, comply with
              legal obligations, resolve disputes, and enforce our agreements.
              The retention period for your project files and assets is
              generally the length needed to complete your project including
              revisions, unless otherwise requested by you.
            </p>
          </div>

          {/* Section 6: Your Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Depending on your jurisdiction, you may have certain rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-gray-200">Access:</strong> You may have
                the right to request access to the personal information we hold
                about you.
              </li>
              <li>
                <strong className="text-gray-200">Correction:</strong> You may
                have the right to request the correction of any inaccurate or
                incomplete personal information.
              </li>
              <li>
                <strong className="text-gray-200">Deletion:</strong> You may
                have the right to request the deletion of your personal
                information, subject to certain limitations.
              </li>
              <li>
                <strong className="text-gray-200">Objection:</strong> You may
                have the right to object to certain processing of your personal
                information.
              </li>
              <li>
                <strong className="text-gray-200">
                  Withdrawal of Consent:
                </strong>{" "}
                If we rely on your consent for processing your information, you
                may have the right to withdraw your consent at any time.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              To exercise any of these rights, please contact us using the
              contact information provided below.
            </p>
          </div>

          {/* Section 7: Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our website uses cookies and similar tracking technologies to
              collect information about your browsing activity. You can control
              the use of cookies through your browser settings. However,
              disabling cookies may impact the functionality of our website.
            </p>
          </div>

          {/* Section 8: Children's Privacy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for use by children under the age of
              18. We do not knowingly collect personal information from children.
              If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us
              immediately.
            </p>
          </div>

          {/* Section 9: International Data Transfers */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              As Vidoro is located in India, your information may be transferred
              to and processed in India. We will take all necessary steps to
              protect your information and ensure it is treated securely.
            </p>
          </div>

          {/* Section 10: Changes to this Privacy Policy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              10. Changes to this Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the updated
              policy on our website and updating the effective date. Your
              continued use of our services after such changes constitutes your
              acceptance of the revised policy.
            </p>
          </div>

          {/* Section 11: Contact Us */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us at:
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