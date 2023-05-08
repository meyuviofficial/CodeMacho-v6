import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen min-w-screen md:w-full px-2 md:px-8">
        <div className="shrink-0 justify-center drop-shadow-2xl p-8 mt-12 mx-24 w-full md:w-max border-2 border-red-600 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl prose-headings:text-red-600">
          <article className="prose lg:prose-l prose-img:rounded-xl prose-a:text-blue-600">
            <h1 className="mb-4 pt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {data.mdx.frontmatter.title}
            </h1>
            <p className="font-bold text-red-600">
              {data.mdx.frontmatter.date}
            </p>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
            <>{children}</>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
