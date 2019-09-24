import { Link } from 'gatsby'
import React from 'react'

export default function ProductPage(props) {
  console.log(props.data.markdownRemark)

  return (
    <div className="flex flex-col md:flex-row md:-mx-8">
      <img
        src={props.data.markdownRemark.frontmatter.image}
        alt="product"
        className="h-full w-full md:w-1/3 md:mx-8 rounded-lg"
      />
      <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
        <Link className="text-gray-700 font-bold text-red-600" to="/">
          ← Back to product list
        </Link>
        <h1 className="font-bold text-4xl text-gray-900">{props.data.markdownRemark.frontmatter.name}</h1>
        <span className="block font-semibold text-lg text-gray-700">
          {props.data.markdownRemark.frontmatter.price}
        </span>
        <button
          className="btn btn-red mt-4"
          onClick={() => alert('Added to cart!')}
        >
          Add to cart
        </button>
        <div
          className="markdown mt-4"
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        price,
        image
      }
    }
  }
`