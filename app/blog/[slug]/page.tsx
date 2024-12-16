import { getBlogPost, getRelatedPosts } from "@/app/blog/[slug]/blog_test";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/header";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category, post.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span>{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <div className="prose max-w-none">
              <p>{post.content}</p>
              {/* Add more content here */}
            </div>
          </article>
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Related Posts
              </h2>
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="block hover:bg-gray-50 p-2 rounded"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedPost.category}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
