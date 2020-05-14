/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"
import SEO from "./SEO"
import innertext from "innertext"

const BlogPostLayout = ({ data }) => {
  const post = data.wordpressPost
  console.log("POST", post)
  return (
    <>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={post.featured_media.source_url}
        keywords={post.categories.map(res => res.name).join(", ")}
      />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPostLayout
export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      slug
      title
      content
      featured_media {
        source_url
      }
      categories
      excerpt
    }
  }
`
