import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import { StoreContext } from "../context/store-context"
import {AddToCart} from "../components/add-to-cart"
import Video from "../components/video"
import JSONData from "../content/fireworksVideos.json"
import { moreButton } from "./more-button.module.css"

import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
  productIntroStyle,
} from "./product-card.module.css"





export function ProductCard({ product, eager }) {

  const { client } = React.useContext(StoreContext);

  
  
  const {
    id,
    title,
    description,
    tags,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
  } = product




const correctVideo = JSONData.content.find(data => data.id === product.id);
console.log(correctVideo);




  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length
  
  
  return (
    <Link
      className={productCardStyle}
      to={slug}
      aria-label={`View ${title} product page`}
    >
      <div className={productDetailsStyle}>
        
        <h2 as="h2" className={productHeadingStyle}>
          {title}
        </h2>
        <div className={productVendorStyle}>{vendor}</div>
        
        
        <div className={productPrice}>{price}</div>
        
        
          <div>
            </div>
      </div>
      
      {hasImage
        ? (
          <div className={productImageStyle} data-name="product-image-box">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
        )
      }
      <div className={productDetailsStyle}>
      <div className={productVendorStyle}>{correctVideo?.intro}</div>
        
        
        <Video videoSrcURL={correctVideo?.videoSrcURL}/>
        
        <Link  className={moreButton} to="/products/jumping-jelly-beans/">more...</Link>

        
      
        
        
          <div>
            </div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    description
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    tags
    vendor
  }
`
