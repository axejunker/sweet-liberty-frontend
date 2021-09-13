import React, { useState, useEffect, useContext } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useLocation } from "@reach/router"

import MenuItemCard from "../MenuItemCard"
import ThemeContext from "../../system/ThemeContext"
import LeafLeft from "../../assets/leaf_left.png"
import LeafRight from "../../assets/leaf_right.png"
import {
  Container,
  Main,
  MenuTitle,
  TabButton,
  PrimaryDealBox,
  SecondaryDealBox,
} from "../UI"
import { nameFormatter, createHashName } from "../../utilities"

const MenuPage = () => {
  const { allDatoCmsMenu } = useStaticQuery(graphql`
    query DatoQuery {
      allDatoCmsMenu {
        nodes {
          menuNameNavigation
          menuNameFull
          menuIcon {
            url
          }
          backgroundColor {
            hex
          }
          menu {
            title
            border
            darkSection
            foodItem {
              name
              ingredients
              price
            }
          }
          dealBoxTop {
            title
            firstPriceTitle
            firstPrice
            secondPriceTitle
            secondPrice
            consumerInformation
          }
          secondMenuTitle
          secondMenu {
            title
            border
            darkSection
            foodItem {
              name
              ingredients
              price
            }
          }
          dealBoxSecondMenu {
            title
            price
          }
        }
      }
    }
  `)

  const location = useLocation()
  let initialIndex = 0
  if (location.hash.length !== 0) {
    const index = allDatoCmsMenu.nodes.findIndex(x => {
      const testhash = location.hash.toLowerCase()
      const menuName = createHashName(`#${x.menuNameNavigation}`)
      return menuName === testhash
    })
    initialIndex = index
  }
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const tabs = allDatoCmsMenu.nodes
  const [activeTab, setActiveTab] = useState(
    `tab__${createHashName(tabs[initialIndex].menuNameNavigation)}`
  )
  const { themeHandler } = useContext(ThemeContext)
  const [bodyColor, setBodyColor] = useState(
    tabs[initialIndex].backgroundColor.hex
  )

  const tabClickHandler = (backgroundColor, tabName, index) => {
    const hashName = createHashName(tabName)
    navigate(`/menus/#${hashName}`)
    setBodyColor(nameFormatter(backgroundColor))
    setActiveTab(`tab__${hashName}`)
    setTabIndex(index)
  }

  useEffect(() => {
    setActiveTab(
      `tab__${createHashName(tabs[initialIndex].menuNameNavigation)}`
    )
    setBodyColor(nameFormatter(tabs[initialIndex].backgroundColor.hex))
    themeHandler(bodyColor)
  }, [bodyColor, themeHandler, tabIndex, location.hash])

  useEffect(() => {
    if (location.hash.length !== 0) {
      const index = allDatoCmsMenu.nodes.findIndex(x => {
        const testhash = location.hash.toLowerCase()
        const menuName = createHashName(`#${x.menuNameNavigation}`)
        return menuName === testhash
      })
      setTabIndex(index)
    }
  }, [location.hash])

  return (
    <Main backgroundColor={bodyColor}>
      <div className="hidden md:flex absolute top-0 left-0 right-0 justify-between items-start pointer-events-none">
        <img src={LeafLeft} alt="Sweet Liberty" width="381px" height="824px" />
        <img src={LeafRight} alt="Sweet Liberty" width="220px" height="497px" />
      </div>
      <Tabs selectedIndex={tabIndex}>
        <Container>
          <div className="md:px-36">
            <TabList
              className={`flex gap-4 md:gap-6 justify-between mb-24 pb-4 overflow-x-auto tablist-scrollbar tablist-scrollbar-${activeTab} ${activeTab}`}
            >
              {React.Children.toArray(
                tabs.map((t, index) => (
                  <Tab
                    onClick={() =>
                      tabClickHandler(
                        t.backgroundColor.hex,
                        t.menuNameNavigation,
                        index
                      )
                    }
                  >
                    <TabButton
                      title={t.menuNameNavigation}
                      icon={t.menuIcon?.url}
                    />
                  </Tab>
                ))
              )}
            </TabList>
          </div>
        </Container>
        <div className=" pb-8 md:pb-12 lg:pb-16">
          {React.Children.toArray(
            tabs.map(t => (
              <TabPanel>
                <MenuTitle title={t.menuNameFull} className="mb-14" />
                {t.dealBoxTop[0] && (
                  <PrimaryDealBox className="mb-14" data={t.dealBoxTop[0]} />
                )}
                <MenuItemCard data={t.menu} />
                {t.secondMenuTitle && (
                  <MenuTitle title={t.secondMenuTitle} className="mb-14" />
                )}
                {t.dealBoxSecondMenu[0] && (
                  <SecondaryDealBox
                    className="mb-14"
                    data={t.dealBoxSecondMenu[0]}
                  />
                )}
                {t.SecondMenu && <MenuItemCard data={t.secondMenu} />}
              </TabPanel>
            ))
          )}
        </div>
      </Tabs>
    </Main>
  )
}

export default MenuPage
