import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import BlogCards from "../components/blogcards";

const BlogPage = ({ data }) => {
  return (
    <html>
      <Header></Header>

      <div className="grid grid-cols-4 gap-4 mx-40 my-20">
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

      <Footer></Footer>
    </html>
  );
};
export const Head = () => <Seo title="My Blog"></Seo>;
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
