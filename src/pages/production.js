import React from "react"
import Link from "gatsby-link"
import { Container, Picture, Section } from "../components-styled"
import { Flex, Box } from "grid-styled"

import img from "../img"
import DCPicture from "../components/DCPicture.js"

const ProductionPage = () => (
  <Container>
    <DCPicture img={img["02"]} />
    <Section>
      <h2 id="production">Our Production</h2>
      <p>Have a look at our production.</p>
      <h3 id="location">Location</h3>
      <p>We are located in ??? See where we are located.</p>
      <h3 id="harvesting">Harvesting</h3>
      <p>Accompany us when we are harvesting.</p>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["02"]} />
        </Box>
      </Flex>
      <h3 id="storing">Storing</h3>
      <p>Have a look at our production.</p>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["02"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["02"]} />
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default ProductionPage
