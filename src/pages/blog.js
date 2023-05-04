import * as React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import BlogCards from "../components/blogcards";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <html lang="en">
      <Layout>
        <div className="flex items-center justify-center min-w-screen px-3 mt-4 md:mt-8 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600">
            Our Blogs
          </h1>
        </div>
        <section className="h-max flex items-center justify-center px-1 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3 py-4 mt-5 md:mx-40 md:mt-20">
            {data.allMdx.nodes.map((node) => (
              <BlogCards
                blogtitle={node.frontmatter.title}
                content={node.excerpt}
                date={node.frontmatter.date}
                slug={node.frontmatter.slug}
              ></BlogCards>
              // <li key={node.name}>{node.name}</li>
            ))}
          </div>
        </section>
      </Layout>
    </html>
  );
};
export const Head = () => <Seo title="CodeMacho Blogs | Blogs"></Seo>;
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
export default BlogPage;
