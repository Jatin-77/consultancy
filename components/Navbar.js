"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F2D52] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-wide text-[#C9A227]"
          >
            Adi Consultancy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-[#F8F6F2]  hover:text-[#C9A227] transition duration-300 font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#F8F6F2] hover:text-[#C9A227] transition duration-300 font-medium"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-[#F8F6F2] hover:text-[#C9A227] transition duration-300 font-medium"
            >
              Contact
            </Link>

            
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#F8F6F2]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#143B6A] border-t border-[#C9A227]/30">
          <div className="flex flex-col px-6 py-5 space-y-4">
            <Link
              href="/"
              className="text-[#F8F6F2] hover:text-[#C9A227]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#F8F6F2] hover:text-[#C9A227]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-[#F8F6F2] hover:text-[#C9A227]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}