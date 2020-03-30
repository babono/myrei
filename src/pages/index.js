import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to MYREI</h1>
    <p>We are here to help you calculate your investment in property.</p>
    
    <Link to="/calculator/">try calculator</Link>
  </Layout>
)

export default IndexPage
