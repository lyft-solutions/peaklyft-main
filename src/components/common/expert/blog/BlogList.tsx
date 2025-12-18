"use client";

import BlogCard from "./BlogCard";
import { BlogPost } from "@/utils/blog";
import { blogs } from "@/utils/blog";

interface BlogListProps {
  featuredOnly?: boolean;
}

export default function BlogList({ featuredOnly = false }: BlogListProps) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="container px-4 sm:px-10 mt-10 text-center text-gray-600">
        No blog posts available at the moment. Please check back later.
      </div>
    );
  }

  // Filter featured posts if needed
  const displayedPosts = featuredOnly 
    ? blogs.filter((post: BlogPost) => post.featured) 
    : blogs;

  if (displayedPosts.length === 0) {
    return (
      <div className="container px-4 sm:px-10 mt-10 text-center text-gray-600">
        No featured blog posts available.
      </div>
    );
  }

  return (
    <div className="container px-4 sm:px-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {displayedPosts.map((post: BlogPost) => (
          <BlogCard 
            key={post.id || `blog-${post.slug || post.title.substring(0, 20)}`} 
            {...post} 
          />
        ))}
      </div>
    </div>
  );
}
