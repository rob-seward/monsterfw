import * as React from "react"
import { ProductCard } from "./product-card"
import { listingContainerStyle } from "./product-listing.module.css"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function ProductListing({ products = [] }) {

let accessories=[];
  products.forEach((product) => {
    
    if (product.tags[0] === 'accessories') {
      accessories.push(product);
      
    }
});
  
let cakes=[];
    products.forEach((product) => {
      if (product.tags[0] === 'Cakes') {
        cakes.push(product);
      }
});

let fountains=[];
    products.forEach((product) => {
      if (product.tags[0] === 'Fountain') {
        fountains.push(product);
      }
});

let rockets=[];
    products.forEach((product) => {
      if (product.tags[0] === 'Rockets') {
        rockets.push(product);
      }
});

let SingleIgnition=[];
    products.forEach((product) => {
      if (product.tags[0] === 'Single Ignition') {
        SingleIgnition.push(product);
      }
});

let SelectionBoxes=[];
    products.forEach((product) => {
      if (product.tags[0] === 'Selection Boxes') {
        SelectionBoxes.push(product);
      }
});
    
  
  return (
    <>
    
    <h2 
    data-sal="flip-up"
    data-sal-delay="400"
    >Fountains</h2>

      <div className={listingContainerStyle}>
        {fountains.map((p, index) => (
          
          <ProductCard product={p} key={p.id} eager={index === 0} />
          ))}
      </div>

    <h2
    data-sal="flip-up"
    data-sal-delay="200"
    >Cakes</h2>

      <div className={listingContainerStyle} >
        {cakes.map((p, index) => (
      <ProductCard product={p} key={p.id} eager={index === 0} />
          ))}
      </div>

    <h2
    data-sal="flip-up"
    data-sal-delay="300"
    
    >Rockets</h2>

      <div className={listingContainerStyle}>
        {rockets.map((p, index) => (
        <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
      </div>

    <h2
    data-sal="flip-up"
    data-sal-delay="300"
    
    >Single Ignition</h2>
      <div className={listingContainerStyle}>
        {SingleIgnition.map((p, index) => (
      <ProductCard product={p} key={p.id} eager={index === 0} />
        ))}
      </div>

    <h2
    data-sal="flip-up"
    data-sal-delay="300"
    
    >Selection Boxes</h2>

      <div className={listingContainerStyle}>
        {SelectionBoxes.map((p, index) => (
      <ProductCard product={p} key={p.id} eager={index === 0} />
        ))}
      </div>

    <h2
    data-sal="flip-up"
    data-sal-delay="300"
    
    >Accessories</h2>

      <div className={listingContainerStyle}>
        {accessories.map((p, index) => (
      <ProductCard product={p} key={p.id} eager={index === 0} />
      ))}
      </div>


    </>
  
    
  )
}

