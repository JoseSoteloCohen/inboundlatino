import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Plugins from "../components/plugins";

const Cara = () => (
  <Layout>
    <Parallax pages={6}>
      <Hero offset={0} />
      <Projects offset={1} />
      <Plugins offset={2}/>
      <About offset={4} />
      <Contact offset={5} />
    </Parallax>
  </Layout>
)

export default Cara
