import { Header } from "@/app/components/header";
import { Search, BookOpen, Code, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore roadmaps, track progress, and achieve your goals.
          </p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for roadmaps, topics, or skills..."
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006036] focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#006036]">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Roadmaps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                icon: Code,
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Data Science",
                icon: BookOpen,
                color: "bg-green-100 text-green-600",
              },
              {
                title: "UX Design",
                icon: Palette,
                color: "bg-purple-100 text-purple-600",
              },
            ].map((roadmap, index) => (
              <Link
                href={`/roadmap/${roadmap.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                key={index}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                  <div
                    className={`inline-block p-3 rounded-full ${roadmap.color} mb-4`}
                  >
                    <roadmap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {roadmap.title}
                  </h3>
                  <p className="text-gray-600">
                    Start your journey in {roadmap.title.toLowerCase()} with our
                    comprehensive roadmap.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 Essential Skills for Web Developers in 2023",
                category: "Web Development",
              },
              {
                title: "Getting Started with Python for Data Science",
                category: "Data Science",
              },
              {
                title: "The Importance of User Research in UX Design",
                category: "UX Design",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-[#006036] font-semibold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-[#006036] font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
