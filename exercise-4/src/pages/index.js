import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { Helmet } from "react-helmet"
const IndexPage = ({ data }) => {
  console.log("DATA", data)
  return (
    <Layout>
      <Helmet>
        <title>Gatsby - Bootstraped Wordpress Sourced</title>
        <meta
          name="description"
          content="This is the description of gtasby wordpress site"
        />
        <meta
          name="keywords"
          content="gatsby,gatsbyjs project,gatsby bootstrap"
        />
         <meta
          name="robot"
          content="index,follow"
        />
      </Helmet>
      <div className="col-xs-6">
        <div className="p-3">
          {data.allWordpressPost.nodes.map(node => (
            <Post
              title={node.title}
              excerpt={node.excerpt}
              image={node.featured_media.source_url}
              readMore={node.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`

export default IndexPage
