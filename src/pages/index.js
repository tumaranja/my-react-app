import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
    <nav className="NavWrapper">
      <ul className="Nav">
        <li><a href=""><img className="NavItem DesignCodeLogo" src="../images/DesignCode-Logo-White.svg"/></a></li>
        <li><a className="NavItem">Courses</a></li>
        <li><a className="NavItem">Downloads</a></li>
        <li><a className="NavItem">Workshops</a></li>
        <li><a className="NavItem">Sign in</a></li>
        <li><a className="NavItem SignUp">Try for free</a></li>
      </ul>
    </nav>
      <div className="HeroGroup">
        <h1 className="Title">Learn to design and code <span>React apps</span></h1>
         <p className="Intro">Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
         <a className="HeroLink">Watch the Video</a>
         <ul className="AppLogos">
          <li className="AppLogo"><img src="../images/logo-sketch.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-figma.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-invision.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-framer.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-react.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-xcode.png"></img></li>
          <li className="AppLogo"><img src="../images/logo-swift.png"></img></li>
         </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
