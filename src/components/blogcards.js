import React from "react";
import { Link } from "gatsby";

const BlogCards = ({ blogtitle, content, date, slug }) => {
  return (
    <div className="flex">
      <article className="shrink-0 w-80 min-h-max h-full border-2 border-red-600 overflow-hidden rounded-xl shadow-lg transition hover:shadow-2xl">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time datetime={date} className="block text-xs text-red-600">
            {date}
          </time>

          <Link to={`/blog/${slug}`}>
            <h3 className="mt-0.5 text-lg font-bold text-red-600">
              {blogtitle}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {content}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogCards;
