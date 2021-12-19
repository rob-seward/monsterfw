import * as React from "react"
import HeroBanner from "../components/hero-banner"

import {
  heroStripColor,
    bristolFavShop,
  } from "../components/home-page-hero.module.css"

export default function homePageHero() {
    return (
    <>
    <div>
    <div className={heroStripColor}>
     <h1 className={bristolFavShop}>Bristol's favourite Firework Shop</h1>
    </div>
    <HeroBanner />
    </div>
        
        
    </>
    )

}