import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container } from "../../UI"

const SlideThree = ({ className }) => {
  return (
    <div className={`bg-brandDark pt-20 pb-48 md:pb-28 xl:pt-36 ${className}`}>
      <Container>
        <div className="xl:px-12 relative">
          <h2 className="font-bebas text-brandLight mb-8 md:mb-20 text-5xl xl:text-8xl text-left">
            Featured Cocktail
          </h2>
          <div>
            <h3 className="relative text-center font-bebas xl:leading-none transition-all duration-1000 left-0">
              <span className="absolute -top-6 -left-1 md:-top-8 md:left-60 text-7xl xl:text-heavy-comp text-white z-[5]">
                Our Pina
              </span>
              <span className="relative">
                <span className="text-brandLight text-9xl xl:text-heavy relative">
                  Colada
                </span>
              </span>
              <span className="absolute -bottom-4 md:bottom-0 right-0 md:right-60 text-7xl xl:text-heavy-comp text-white z-0 md:z-[5]">
                Cocktail
              </span>
            </h3>
            <p className="font-bebas text-brandLight text-left md:text-5xl inline-block relative md:bottom-18 -left-16 md:-left-64">
              FORDS GIN • NOILLY PRAT • SEA SALT •
              <br />
              BLUE • LEMON GAS EXPLOSION
            </p>
          </div>
          <div className="absolute top-0 transform translate-x-20 md:-top-12 md:right-24">
            <StaticImage
              src="../../../assets/peach_cocktail.png"
              alt="The Florida Cocktail"
              placeholder="blurred"
              className="z-30"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SlideThree
