"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-10">Last Updated: January 2025</p>

        <p className="text-gray-700 leading-relaxed mb-8">
          This Privacy Policy outlines how MTathagat Developers Pvt. Ltd.
          (“we”, “our”, “us”) collects, uses, shares, and protects your
          information when you visit our website Tathagat Residency at
          <a
            href="https://tathagat-residency.vercel.app/"
            className="text-blue-600 underline ml-1"
            target="_blank"
          >
            https://tathagat-residency.vercel.app/
          </a>.
        </p>

        <Section
          title="1. Information We Collect"
          content={
            <>
              <p className="mb-3 font-semibold">a) Information You Provide Directly</p>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Details submitted in inquiry forms</li>
              </ul>

              <p className="mb-3 font-semibold">b) Automatically Collected Information</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>IP address</li>
                <li>Browser & device details</li>
                <li>Pages viewed</li>
                <li>Date & time of visit</li>
                <li>Analytics & cookies</li>
              </ul>
            </>
          }
        />

        <Section
          title="2. How We Use Your Information"
          content={
            <ul className="list-disc list-inside text-gray-700">
              <li>Respond to inquiries</li>
              <li>Share brochures, offers, and updates</li>
              <li>Schedule site visits</li>
              <li>Improve website performance</li>
              <li>Internal communications</li>
              <li>Marketing (with consent)</li>
            </ul>
          }
        />

        <Section
          title="3. Sharing Your Information"
          content={
            <ul className="list-disc list-inside text-gray-700">
              <li>Authorized brokers & sales partners</li>
              <li>Service providers (email, hosting, analytics)</li>
              <li>Government authorities (if legally required)</li>
            </ul>
          }
        />

        <Section
          title="4. Data Storage & Security"
          content={
            <p className="text-gray-700">
              We follow industry-standard safety measures to protect your personal data.
            </p>
          }
        />

        <Section
          title="5. Data Retention"
          content={
            <p className="text-gray-700">
              Your data is retained only as long as required for legal or operational purposes.
            </p>
          }
        />

        <Section
          title="6. Cookies & Tracking"
          content={
            <p className="text-gray-700">
              Cookies help improve functionality and user experience. You may disable them
              in your browser.
            </p>
          }
        />

        <Section
          title="7. Your Rights"
          content={
            <ul className="list-disc list-inside text-gray-700">
              <li>Access your data</li>
              <li>Correct or update it</li>
              <li>Request deletion</li>
              <li>Withdraw marketing consent</li>
            </ul>
          }
        />

        <Section
          title="8. Third-Party Links"
          content={
            <p className="text-gray-700">
              We are not responsible for the privacy practices of external sites.
            </p>
          }
        />

        <Section
          title="9. Updates to This Policy"
          content={
            <p className="text-gray-700">
              This policy may be updated periodically with a revised “Last Updated” date.
            </p>
          }
        />

        <Section
          title="10. Contact Us"
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
