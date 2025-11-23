"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <div className="space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
