import Link from "next/link";
// import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#006036]">
                LearnMap
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#006036] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-[#006036] px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
            </Link>
            <Link
              href="/progress"
              className="text-gray-700 hover:text-[#006036] px-3 py-2 rounded-md text-sm font-medium"
            >
              Progress Tracker
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#006036] px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#006036] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
          <div className="flex md:hidden">
            <button className="text-gray-700 hover:text-[#006036] focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
