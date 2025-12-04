"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="bg-[#F5F3EE] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-10">Last Updated: January 2025</p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to the website of Tathagat Residency, developed and maintained
          by MTathagat Developers Pvt. Ltd. By accessing or using our website
          <a
            href="https://tathagat-residency.vercel.app/"
            className="text-blue-600 underline ml-1"
            target="_blank"
          >
            https://tathagat-residency.vercel.app/
          </a>, you agree to the following Terms & Conditions. If you do not
          agree with any part of these terms, please discontinue using the
          website.
        </p>

        {/* 1 */}
        <Section
          title="1. General Information"
          content={
            <>
              <p className="text-gray-700 mb-4">
                This website provides information about our real estate project,
                Tathagat Residency, including project details, amenities,
                location, floor plans, and inquiry forms.
              </p>
              <p className="text-gray-700">
                All information is for general informational purposes and is
                subject to change without prior notice.
              </p>
            </>
          }
        />

        {/* 2 */}
        <Section
          title="2. Use of Website"
          content={
            <>
              <p className="text-gray-700 mb-3">By using this website, you agree:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Not to engage in unlawful, harmful, or fraudulent activities.</li>
                <li>Not to attempt unauthorized access to our systems or data.</li>
                <li>Not to disrupt or misuse the website’s functionality.</li>
                <li>To provide accurate details when submitting forms.</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to restrict or terminate access for users
                violating these terms.
              </p>
            </>
          }
        />

        {/* 3 */}
        <Section
          title="3. Accuracy of Information"
          content={
            <>
              <p className="text-gray-700 mb-4">
                While we aim to keep information accurate, it may not always
                reflect the final delivered project.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Images and visuals are illustrative.</li>
                <li>Specifications and designs may be revised.</li>
                <li>Unit availability, pricing, and offers may change anytime.</li>
              </ul>
              <p className="text-gray-700">
                Users should contact our sales team for the most accurate and
                updated details.
              </p>
            </>
          }
        />

        {/* 4 */}
        <Section
          title="4. Intellectual Property Rights"
          content={
            <>
              <p className="text-gray-700 mb-4">
                All content—text, images, logos, graphics, plans, and design
                elements—is the exclusive property of MTathagat Developers Pvt.
                Ltd.
              </p>
              <p className="text-gray-700 mb-2">You may not:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Copy or reproduce any content</li>
                <li>Modify or alter the material</li>
                <li>Use content commercially without permission</li>
              </ul>
            </>
          }
        />

        {/* 5 */}
        <Section
          title="5. User Submissions & Communication"
          content={
            <>
              <p className="text-gray-700 mb-4">
                When you submit your name, phone number, email, or inquiry, you
                authorize us to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Contact you via call, SMS, WhatsApp, or email</li>
                <li>Share project details, updates, and promotional content</li>
                <li>Connect you with authorized brokers or partners</li>
              </ul>
              <p className="text-gray-700">
                You confirm that the information submitted is accurate and
                voluntarily provided.
              </p>
            </>
          }
        />

        {/* 6 */}
        <Section
          title="6. Third-Party Links"
          content={
            <p className="text-gray-700">
              External links on the website are not under our control. We are not
              responsible for the content, accuracy, or privacy practices of such
              websites. Visiting them is at your own risk.
            </p>
          }
        />

        {/* 7 */}
        <Section
          title="7. Limitation of Liability"
          content={
            <p className="text-gray-700">
              MTathagat Developers Pvt. Ltd. shall not be liable for any
              inaccuracies, losses, damages, or inconveniences resulting from the
              use of this website. Users must verify all information before making
              decisions.
            </p>
          }
        />

        {/* 8 */}
        <Section
          title="8. Indemnification"
          content={
            <p className="text-gray-700">
              By using the website, you agree to indemnify and hold harmless
              MTathagat Developers Pvt. Ltd., including employees and partners,
              from any claims arising from misuse of the site or violation of
              these terms.
            </p>
          }
        />

        {/* 9 */}
        <Section
          title="9. Changes to Terms & Conditions"
          content={
            <p className="text-gray-700">
              We may update or modify these terms anytime. Updated terms will be
              posted with a revised date. Continued use of the website means you
              accept the updated terms.
            </p>
          }
        />

        {/* 10 */}
        <Section
          title="10. Governing Law"
          content={
            <p className="text-gray-700">
              These Terms & Conditions are governed by the laws of India. All
              disputes fall under the jurisdiction of Patna, Bihar.
            </p>
          }
        />

        {/* 11 */}
        <Section
          title="11. Contact Us"
          content={
            <div className="text-gray-700">
              <p className="font-semibold">MTathagat Developers Pvt. Ltd.</p>
              <p>Email: info@mtathagat.com</p>
              <p>Phone: +91 77598 93555</p>
            </div>
          }
        />

      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      <div className="text-lg leading-relaxed">{content}</div>
    </div>
  );
}
