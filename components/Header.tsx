'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md z-50 border-b border-yellow-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-yellow-600">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer circle */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="4"/>
                <circle cx="100" cy="100" r="90" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
                
                {/* Background */}
                <circle cx="100" cy="100" r="90" fill="#0a0a0a"/>
                
                {/* Text: ATG */}
                <text x="100" y="110" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#d4af37" textAnchor="middle" letterSpacing="4">ATG</text>
              </svg>
            </div>
            <div>
              <p className="text-yellow-400 font-bold text-sm uppercase">ATG</p>
              <p className="text-yellow-300 text-xs">Chiến Thuật & Hướng Dẫn</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-wider">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Trang Chủ
            </Link>
            <Link href="/guides" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Hướng Dẫn
            </Link>
            <Link href="/generals" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Tướng
            </Link>
            <Link href="/rankings" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Bảng Xếp Hạng
            </Link>
            <Link href="/news" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Tin Tức
            </Link>
            <Link href="/#community" className="text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 pb-1 transition duration-300 ease-in-out transform hover:scale-105">
              Cộng Đồng
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-sm uppercase tracking-wider border-t border-yellow-600 pt-4">
            <Link href="/" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Trang Chủ
            </Link>
            <Link href="/guides" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Hướng Dẫn
            </Link>
            <Link href="/generals" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Tướng
            </Link>
            <Link href="/rankings" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Bảng Xếp Hạng
            </Link>
            <Link href="/news" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Tin Tức
            </Link>
            <Link href="/#community" className="block text-gray-300 hover:text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-20 px-3 py-2 rounded transition duration-300 ease-in-out">
              Cộng Đồng
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
