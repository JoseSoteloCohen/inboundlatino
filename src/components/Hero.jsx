import React from "react"

const Hero = ({title, subtitle}) => (
  <div className="container py-12 lg:pb-16">
    <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
      {title}
      <br />
      <span className="text-blue-600">
        {subtitle}
      </span>
    </h1>
  </div>
)

export default Hero
