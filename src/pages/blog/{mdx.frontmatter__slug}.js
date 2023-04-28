import * as React from "react";
import Seo from "../../components/seo";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <html>
      <Header></Header>
      <div className="flex mt-4 md:mt-20 drop-shadow-2xl justify-center border-2 border-red-600 bg-gradient-to-br from-gray-100 to-gray-300 mx-auto lg:mx-96 rounded-xl prose-headings:text-red-600">
        <article className="prose  lg:prose-l prose-img:rounded-xl prose-a:text-blue-600">
          <h1 className="mb-4 pt-4 md:pt-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {data.mdx.frontmatter.title}
          </h1>
          <p className="font-bold text-red-600">{data.mdx.frontmatter.date}</p>
          <p className="text-justify">{children}</p>
        </article>
      </div>
      <Footer></Footer>
    </html>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
