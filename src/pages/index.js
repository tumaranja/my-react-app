import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="Hero">
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
        <h1 className="Title">Learn to design and code <span>modern apps</span></h1>
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
    </section>
    <section className="CallToAction">
      <a className="ButtonMain MarginBottom24">Try for free</a>
      <p className="AllCapsLight MarginBottom16">Get 7 days free trial</p>
      <p className="TextSmall">Then, it’s $9 per month, billed annually.
        <br>
        </br>
        Cancel anytime. No soul required.
        <br>
        </br>
        Free upgrade from version 2.</p>
    </section>
    <section className="Courses">
      <h2>12 courses, more coming.</h2>
    </section>
  </Layout>
)

export default IndexPage
