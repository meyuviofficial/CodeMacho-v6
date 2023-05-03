import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import BlogCards from "../components/blogcards";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <html>
      <div className="flex flex-col h-screen w-screen">
        <Header></Header>
        <section className="grid h-screen place-items-center mb-auto md:mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mx-40 mt-20">
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
        <footer className="">
          <Footer></Footer>
        </footer>
      </div>
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