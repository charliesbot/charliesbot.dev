import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <Container />
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
