"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturesExtended() {
  return (
    <section className="py-16 px-6 md:px-20 space-y-24 bg-white">
      {/* Block 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Personalize your credit card
          </h2>
          <p className="text-gray-700 mb-6">
            Create your design or choose from number of amazing and unique existing designs.
            With our personalized credit cards, you can choose from a variety of designs and add
            your own photos or artwork to make your card truly one-of-a-kind. You can also select
            the rewards program that best suits your spending habits and earn points or cashback on
            every purchase.
          </p>
          <button className="inline-flex items-center text-black font-semibold hover:underline">
            Learn more <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/credit.png"
            alt="Credit Card"
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Block 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/investiment.png"
            alt="Investments"
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Investments made simple
          </h2>
          <p className="text-gray-700 mb-6">
            Our experienced financial advisors are here to guide you through the investment process,
            helping you select the best options for your goals and risk tolerance. We offer a wide variety
            of investment products, including mutual funds, ETFs, stocks, and bonds, so you can build a
            diversified portfolio that suits your needs.
          </p>
          <button className="inline-flex items-center text-black font-semibold hover:underline">
            Learn more <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
