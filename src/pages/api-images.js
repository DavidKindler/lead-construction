import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import axios from 'axios'
import Layout from "../components/layout"
// import SEO from "../components/seo"

// import Layout from '../components/Layout'
// import PostList from '../components/PostList'
// import Pagination from '../components/Pagination'

export default class ApiImages extends React.Component {

  state = {
    loading: false,
    error: false,
    data: {},
  }

  componentDidMount() {
    this.fetchImages()
  }

  render() {
    const { data } = this.state.data
    // const { edges: posts } = data.allWordpressPost
    console.log('images.js data is ', data)
    return (
      <Layout>
        {/* //   <PostList posts={posts} title="Latest posts" />
      //   <Pagination pageContext={pageContext} pathPrefix="/" />
      // </Layout> */}
        <div>
          {JSON.stringify(data)}
        </div>
      </Layout>
    )
  }
  fetchImages = () => {
    // this.setState({ loading: true })

    axios
      .get(`http://leader.test:8888/wp-json/wp/v2/posts`)
      .then(data => {

        this.setState({
          loading: false,
          data: {
            ...this.state.data,
            data
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
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
