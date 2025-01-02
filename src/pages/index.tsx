// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import ProductCard from './product'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to = "/about">About</Link>
      <ProductCard productName="Clothes"></ProductCard>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
    <>
        <title>Home Page </title>
        <meta name="description" content="Your description" />
    </>
)

// Step 3: Export your component
export default IndexPage