// components/layout/Header.tsx
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ALX Listing
          </Link>
          <nav className="hidden md:flex gap-3 text-sm text-gray-600">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/rooms" className="hover:underline">
              Rooms
            </Link>
            <Link href="/villas" className="hover:underline">
              Villas
            </Link>
            <Link href="/countryside" className="hover:underline">
              Countryside
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <input
              placeholder="Search location, property..."
              className="px-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 text-sm rounded-md">Sign in</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
