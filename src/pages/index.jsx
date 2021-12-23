import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import Video from "../components/video"
import JSONData from "../content/fireworksVideos.json"
import HomePageHero from "../components/home-page-hero"





import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

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

  export default function IndexPage({ 
  
   }) {
  
  return (
    <Layout>
      <HomePageHero />
      
      <Hero />
     
    </Layout>
  )
}




