import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <>
      {" "}
      <title>
        {title} | {data.site.siteMetadata.title}{" "}
      </title>
      <meta charset="UTF-8" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="author" content="Yuvaraj Selvarajan" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </>
  );
};

export default Seo;
