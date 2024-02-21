import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nicole and her dog, Cora in a selfie"
        src="../images/Nicoleandcora.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage