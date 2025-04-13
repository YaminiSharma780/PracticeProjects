import { useState } from "react";
// import { posts } from "../data/posts";
export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  return (
    <div>
      <span
        onClick={() => import("../data/posts").then((module) => setBlogPosts(module.posts))}
        className="cursor-pointer border border-solid border-zinc-500"
      >
        Click to Load Blog Posts
      </span>
      <div>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
          {blogPosts.map((post) => (
            <li
              key={post.id}
              className="border border-solid border-zinc-500 p-2"
            >
              <h1 className="font-semibold">{post.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
