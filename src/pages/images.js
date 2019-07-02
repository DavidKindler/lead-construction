import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

// import Layout from '../components/Layout'
// import PostList from '../components/PostList'
// import Pagination from '../components/Pagination'

export default class Images extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.allWordpressPost
    console.log('images.js data is ', data)
    return (
      <Layout>
        {/* //   <PostList posts={posts} title="Latest posts" />
      //   <Pagination pageContext={pageContext} pathPrefix="/" />
      // </Layout> */}
        <div>
          {JSON.stringify(data.swapi.posts)}
        </div>
      </Layout>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allWordpressPost: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
//   pageContext: PropTypes.shape({
//     currentPage: PropTypes.number,
//     numPages: PropTypes.number,
//   }),
// }

export const pageQuery = graphql`
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


// export const pageQuery = graphql`
//  {
//   posts {
//     edges {
//       node {
//         id
//         title
//         slug
//       }
//     }
//   }
// }

// `
