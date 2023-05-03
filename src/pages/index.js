import * as React from "react";
import Layout from "../components/layout";
import BlogCards from "../components/blogcards";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { Link } from "gatsby";

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
              Get started with
              <span className="text-red-600"> Code Macho Blogs</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed md:text-lg">
              Cloud can be easy, tech can be easy, anything can be easy ... if
              you're a macho. How to become one?
            </p>
            <bold className="text-red-600 text-2xl md:text-4xl">
              You're at the right spot !!
            </bold>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link
              href="/blog"
              className="px-10 py-3.5 rounded-2xl w-full bg-red-600 text-white text-center rounded-md shadow-md block sm:w-auto shadow-2xl"
            >
              Read More
            </Link>
          </div>
        </section>
        <div className="flex items-center justify-center min-w-screen px-3 mt-4 md:mt-8 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600">
            Recent Posts
          </h1>
        </div>
        <section className="flex items-center justify-center px-3">
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
