import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <html>
      <Layout>
        <div class="flex items-center justify-center min-h-screen px-1">
          <div className="flex justify-center drop-shadow-2xl mx-3 p-8 mt-12 mx-24 w-screen md:w-2/4 border-2 border-red-600 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl prose-headings:text-red-600">
            <article className="prose lg:prose-l prose-img:rounded-xl prose-a:text-blue-600">
              <h1 className="mb-4 pt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {data.mdx.frontmatter.title}
              </h1>
              <p className="font-bold text-red-600">
                {data.mdx.frontmatter.date}
              </p>
              <p className="text-justify">{children}</p>
            </article>
          </div>
        </div>
      </Layout>
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
