type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  content: string;
  excerpt: string;
};

type RelatedPost = {
  id: string;
  title: string;
  category: string;
  slug: string;
};

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // 実際のアプリケーションではデータベースやAPIから取得
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "10 Essential Skills for Web Developers in 2023",
      slug: "10-essential-skills-for-web-developers-in-2023",
      category: "Web Development",
      author: "Jane Doe",
      date: "May 15, 2023",
      content: "実際のコンテンツ...",
      excerpt: "概要テキスト...",
    },
    // 他の投稿...
  ];

  return posts.find((post) => post.slug === slug) || null;
}

export async function getRelatedPosts(
  category: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentPostId: string
): Promise<RelatedPost[]> {
  // 同じカテゴリーの関連記事を取得
  const posts: RelatedPost[] = [
    {
      id: "2",
      title: "Getting Started with React",
      category: "Web Development",
      slug: "getting-started-with-react",
    },
    // 他の関連記事...
  ];

  return posts.filter((post) => post.category === category);
}
