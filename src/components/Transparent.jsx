import React from 'react';
import { HiCheck } from "react-icons/hi";

const Transparent = () => {
    return (
        <>
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <h2 className="font-syne font-extrabold text-[clamp(26px,4vw,40px)]">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-400 mt-2">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Starter */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full">
        <h3 className="font-bold text-lg">Starter</h3>
        <p className="text-gray-400 text-sm mb-4">
          Perfect for getting started
        </p>

        <h2 className="text-3xl font-bold mb-4">
          $0 <span className="text-sm text-gray-400">/Month</span>
        </h2>

        <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
        <li>✓ Access to 10 free tools</li>
          <li>✓ Basic templates</li>
          <li>✓ Community support</li>
          <li>✓ 1 project per month</li>
        </ul>

        <button className="btn mt-auto w-full py-3 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white">
          Get Started Free
        </button>
      </div>

      {/* Pro */}
      <div className="relative rounded-2xl p-8 text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa] shadow-lg scale-105 flex flex-col h-full">

        <span className="btn absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
          Most Popular
        </span>

        <h3 className="font-bold text-lg">Pro</h3>
        <p className="text-sm opacity-80 mb-4">
          Best for professionals
        </p>

        <h2 className="text-3xl font-bold mb-4">
          $29 <span className="text-sm opacity-80">/Month</span>
        </h2>

        <ul className="space-y-2 text-sm mb-6 flex-grow">
          <li>✓ Access to all premium tools</li>
          <li>✓ Unlimited templates</li>
          <li>✓ Priority support</li>
          <li>✓ Unlimited projects</li>
          <li>✓ Cloud sync</li>
          <li>✓ Advanced analytics</li>
        </ul>

        <button className="btn mt-auto w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-gradient-to-r from-[#4f39f6] to-[#9514fa] hover:text-white">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise */}
      <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col h-full">
        <h3 className="font-bold text-lg">Enterprise</h3>
        <p className="text-gray-400 text-sm mb-4">
          For teams and businesses
        </p>

        <h2 className="text-3xl font-bold mb-4">
          $99 <span className="text-sm text-gray-400">/Month</span>
        </h2>

        <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
          <li>✓ Everything in Pro</li>
          <li>✓ Team collaboration</li>
          <li>✓ Custom integrations</li>
          <li>✓ Dedicated support</li>
          <li>✓ SLA guarantee</li>
          <li>✓ Custom branding</li>
        </ul>

        <button className="btn mt-auto w-full py-3 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm opacity-80 mb-6">
          Join thousands of professionals who are already using Digitools to work smarter.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn px-6 py-3 rounded-full bg-white text-purple-600 font-semibold">
            Explore Products
          </button>

          <button className=" btn px-6 py-3 rounded-full bg-transparent text-white hover:bg-white hover:text-black ">
            View Pricing
          </button>
        </div>

        <p className="text-xs mt-4 opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
      </>
    );
};

export default Transparent;