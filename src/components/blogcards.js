import React from "react";
import { Link } from "gatsby";

const BlogCards = ({ blogtitle, content, date, slug }) => {
  return (
    <div className="flex">
      <article className="shrink-0 w-80 h-96 border-2 border-red-600 object-center overflow-hidden rounded-xl shadow-lg transition hover:shadow-2xl">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time datetime={date} className="block text-xs text-gray-500">
            {date}
          </time>

          <a href={`/blog/${slug}`}>
            <h3 className="mt-0.5 text-lg text-gray-900">{blogtitle}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {content}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogCards;
