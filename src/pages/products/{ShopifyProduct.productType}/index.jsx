import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import HomePageHero from "../../../components/home-page-hero"

import {
  container,
  callOut,
  callToAction,
} from "../../index.module.css"


function Hero (props) {
  return (
    <div className={container}>
      
      {
        <>
          <p className={callOut}>
            Click & Collect New Years Eve fireworks
          </p>
          <p className={callToAction}>
          2021 New Years is going to be more fun than ever! And again we think we have the best selection of Fireworks in Bristol. This year we have the new range from the renowned Kimbolton firework company, and their new reduced plastic large display and back garden rockets. Visit us on Gloucester Road by the Royal Oak 
          </p>
        </>
      }
    </div>
  )
}


export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  
  return (
    <Layout>
      <Seo title={`Category: ${productType}`} />
      <HomePageHero />
      <Hero />
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?p=${slugify(productType)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
