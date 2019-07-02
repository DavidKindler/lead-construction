import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import axios from 'axios'
import Layout from "../components/layout"
// import SEO from "../components/seo"

// import Layout from '../components/Layout'
// import PostList from '../components/PostList'
// import Pagination from '../components/Pagination'

export default class GraphqlImages extends React.Component {

  state = {
    loading: false,
    error: false,
    data: {},
  }


  render() {
    const edges = this.props.data.swapi.posts
    // const { edges: posts } = data.allWordpressPost
    console.log('images.js edges graphql data is ', edges)
    return (
      <Layout>
        {/* //   <PostList posts={posts} title="Latest posts" />
      //   <Pagination pageContext={pageContext} pathPrefix="/" />
      // </Layout> */}
        <div>
          {JSON.stringify(edges)}
        </div>
      </Layout>
    )
  }


}


export const gqlQuery = graphql`
  query {
  swapi {
    posts {
      edges {
        node {
          title
          featuredImage {
            srcSet
          }
        }
      }
    }
  }
}
`
