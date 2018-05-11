import React from "react"
import Link from "gatsby-link"
import { Container, Section } from "../components-styled"

import img from "../img"
import DCPicture from "../components/DCPicture.js"

export default ({ data }) => {
  return (
    <Container>
      <DCPicture img={img["10"]} />
      <Section>
        <h2>Blogs</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>
              {node.frontmatter.author} — {node.frontmatter.date}
            </p>
          </div>
        ))}
      </Section>
    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 140)
        }
      }
    }
  }
`
