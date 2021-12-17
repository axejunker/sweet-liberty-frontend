import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import PursuingExcellence from "../components/PursuingExcellence"
import MenuBanner from "../components/MenuBanner"
import MerchSection from "../components/MerchSection"
import BookingSection from "../components/BookingSection"
import NewsEvents from "../components/NewEvents"
import DoGoodWork from "../components/DoGoodWork"
import ShowAndEvents from "../components/ShowAndEvents"

import ScrollTop from "../components/ScrollTop"
import { Main } from "../components/UI"

const FeaturedSection = loadable(
  () => import("../components/FeaturedSection"),
  {
    fallback: (
      <div>
        <p>The Miami Martini</p>
        <p>The Pina Colada</p>
      </div>
    ),
  }
)
const StylishPursue = loadable(() => import("../components/StylishPursue"), {
  fallback: <p>Pursing Happiness</p>,
})
const MiamiIsShit = loadable(() => import("../components/MiamiIsShit"), {
  fallback: <p>Miami Is Shit</p>,
})

const TripleSeatModal = loadable(() =>
  import("../components/Modals/TripleSeatModa")
)

const HomePage = ({ data: { allShopifyProduct } }) => {
  const [tripleSeatModal, setTripleSeatModal] = useState(false)
  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: "sr-res-root",
      type: "reservations",
    })
  })

  const bookTripleSeatHandler = () => {
    setTripleSeatModal(!tripleSeatModal)
  }

  return (
    <Layout isDark>
      <Seo title="Sweet Liberty By Glass Full" />
      <Main className="bg-brandDark md:pt-48">
        <Hero />
        <PursuingExcellence />
        <FeaturedSection />
        <MenuBanner />
        <MerchSection products={allShopifyProduct.nodes} />
        <MiamiIsShit />
        <div className="bg-black">
          <StylishPursue />
          <BookingSection openModal={bookTripleSeatHandler} />
        </div>
        <NewsEvents />
        <DoGoodWork />
        <ShowAndEvents />
        <ScrollTop />
      </Main>

      {tripleSeatModal && (
        <TripleSeatModal closeModal={bookTripleSeatHandler} />
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allShopifyProduct(limit: 3, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
        }
      }
    }
  }
`

export default HomePage
