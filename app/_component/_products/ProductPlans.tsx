
'use client';
import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const productPlans = [
  {
    title: 'Easy',
    price: 'Free',
    bgColor: 'bg-green-100',
    image: '/easy.png',
    reverse: false,
    features: [
      { text: 'Send and receive money', included: true },
      { text: 'Free debit card', included: true },
      { text: 'Free virtual debit card', included: true },
      { text: '10 free cash withdrawals from any ATM', included: true },
      { text: '3D Secure system', included: true },
      { text: 'Deposit Protection', included: true },
      { text: 'Smart Saving system', included: false },
      { text: 'Deals and perks from our partners', included: false },
      { text: 'Travel insurance and protection', included: false },
      { text: 'Exclusive card designs', included: false },
    ],
  },
  {
    title: 'Medium',
    price: '$4.99 / month',
    bgColor: 'bg-blue-100',
    image: '/super.png',
    reverse: true,
    features: [
      { text: 'Send and receive money', included: true },
      { text: 'Free debit card', included: true },
      { text: 'Free virtual debit card', included: true },
      { text: '10 free cash withdrawals from any ATM', included: true },
      { text: '3D Secure system', included: true },
      { text: 'Deposit Protection', included: true },
      { text: 'Smart Saving system', included: true },
      { text: 'Deals and perks from our partners', included: true },
      { text: 'Travel insurance and protection', included: false },
      { text: 'Exclusive card designs', included: false },
    ],
  },
  {
    title: 'Super',
    price: '$9.99 / month',
    bgColor: 'bg-purple-100',
    image: '/mediam.png',
    reverse: false,
    features: [
      { text: 'Send and receive money', included: true },
      { text: 'Free debit card', included: true },
      { text: 'Free virtual debit card', included: true },
      { text: '10 free cash withdrawals from any ATM', included: true },
      { text: '3D Secure system', included: true },
      { text: 'Deposit Protection', included: true },
      { text: 'Smart Saving system', included: true },
      { text: 'Deals and perks from our partners', included: true },
      { text: 'Travel insurance and protection', included: true },
      { text: 'Exclusive card designs', included: true },
    ],
  },
];

export default function ProductPlans() {
  const router = useRouter();

  return (
    <section className="space-y-12">
      <h2 className="text-center text-2xl font-semibold mb-6">Choose a plan tailored to your needs</h2>

      {productPlans.map((plan, idx) => (
        <div key={idx} className={`${plan.bgColor} p-6 rounded-lg`}>
          <div className={`flex flex-col md:flex-row ${plan.reverse ? 'md:flex-row-reverse' : ''} items-center gap-6`}>
            <div className="flex-1">
              <Image
                src={plan.image}
                alt={`${plan.title} plan`}
                width={400}
                height={300}
                className="rounded-md"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-gray-600">{plan.price}</p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    {feature.included ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <X size={16} className="text-red-500" />
                    )}
                    <span className={feature.included ? '' : 'text-gray-400 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push('/register')}
                className="mt-4 text-sm text-blue-600 font-medium hover:underline flex items-center gap-1"
              >
                Create account →
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
