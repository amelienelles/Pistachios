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
      <p>
        When ripe, pistachios become loose and fall of their trees when given a
        strong shake. With our state-of-the-art equipment (also called
        »shakers«), we tightly grip and shake the pistachio trees to let the
        pistachios fall into our nets. Sometimes, we even harvest them by hand,
        gently moving the branches and ensuring that only the most ripe
        pistachios fall into our hands.
      </p>
      <p>Accompany us when we are harvesting.</p>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["00"]} />
        </Box>
      </Flex>

      <h3 id="processing">Further processing</h3>
      <p>
        Once harvested, pistachios need to undergo a series of treatments before
        they can be safely consumed. The outer hull must be removed within 24
        hours to prevent shell staining and deterioration. After that, we sort
        them by size and wash the newly harvested pistachios with clean water.
      </p>
      <p>
        While drying our pistachios, we pay close attention to the required
        moisture level. Pistachios take time to develop their fragrance, which
        is why a delay or rush is all it takes to make an »average pistachio«
        out of an »excellent pistachio«. Thanks to our advanced machines and
        manual controls, me make sure that every single pistachios is nothing
        less than perfect.
      </p>
      <h3 id="storing">Storing</h3>
      <p>Have a look at our production.</p>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["00"]} />
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default ProductionPage
