import { useState } from "react";
import * as React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import BlogCards from "../components/blogcards";
import CustomFooter from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
export const Head = () => <Seo title="CodeMacho Blogs | Home page" />;

export default ({ data }) => {
  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Contact", path: "javascript:void(0)" },
    { title: "Projects", path: "javascript:void(0)" },
  ];

  return (
    // <!DOCTYPE html>
    <html>
      <meta charset="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Layout>
        <section className="justify-center mt-24 mx-auto max-w-screen-xl h-5/6 p-36 px-4 sm:px-8 mb-26">
          <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
              Optimize your website for
              <span className="text-indigo-600"> Search engine</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a
              href="javascript:void(0)"
              className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </section>
        <section className="mt-12 mx-auto mb-auto px-4 max-w-screen-xl md:px-8">
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
            {data.allMdx.nodes.map((node) => (
              <BlogCards
                blogtitle={node.frontmatter.title}
                content={node.excerpt}
                date={node.frontmatter.date}
                slug={node.frontmatter.slug}
              ></BlogCards>
            ))}
          </div>
        </section>
      </Layout>
    </html>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
      nodes {
        frontmatter {
          title
          description
          slug
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;
