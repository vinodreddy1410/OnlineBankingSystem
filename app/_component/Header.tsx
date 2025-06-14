// app/_component/Header.tsx
'use client';
import React from 'react';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#0A1A43] bg-opacity-90 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Logo and Nav */}
        <div className="flex items-center space-x-12">
          <span className="text-white text-2xl font-semibold">Bankio</span>
          <nav className="hidden md:flex space-x-6 text-white text-sm font-medium">
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Blog</Link>
            <Link href="#" className="hover:underline">Business solutions</Link>
          </nav>
        </div>

        {/* Right - Internet Banking */}
        <div>
          <button
            className="flex items-center gap-2 px-5 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-[#0A1A43] transition-all"
            onClick={() => router.push('/login')}
          >
            Internet Banking
            <Lock size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
