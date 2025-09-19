// components/layout/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} ALX Listing App</p>
        <div className="flex gap-4 mt-3 md:mt-0"></div>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
