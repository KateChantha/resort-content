import React from 'react'

const Hero = ({ children, heroStyle }) => {
  return (
    <header className={heroStyle}>{children}</header>
  )
}

export default Hero

Hero.defaultProps = {
  heroStyle: "defaultHero"
}