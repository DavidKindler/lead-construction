import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Images from '../components/ImageList'
import Images from '../templates/images'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Images />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
