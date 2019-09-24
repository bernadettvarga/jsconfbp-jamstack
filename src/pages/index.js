import { Link } from 'gatsby'
import React from 'react'

const IndexPage = (props) => {
  return (
  <div className="product-list">
    {props.data.allMarkdownRemark.edges.map((edge) => (
      <Link
        key={edge.node.fields.slug}
        className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
        to={edge.node.fields.slug}
      >
        <div className="relative pb-full">
          <img
            src={edge.node.frontmatter.image}
            alt={edge.node.frontmatter.name}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="bg-white p-4">
          <div className="font-bold text-2xl text-gray-900">{edge.node.frontmatter.name}</div>
          <div className="font-semibold text-l text-gray-700">€{edge.node.frontmatter.price}</div>
        </div>
      </Link>
    ))}
    </div>
)}

export default IndexPage

export const productQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            name
            price
            image
          }
        }
      }
    }
  }
`
