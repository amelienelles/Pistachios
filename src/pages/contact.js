import React from "react"

import { Container, Img, Section } from "../components-styled"

import { Flex, Box } from "grid-styled"
import img from "../img"
import DCPicture from "../components/DCPicture.js"

const ContactPage = () => (
  <Container>
    <DCPicture img={img["00"]} />
    <Section>
      <h2>Contact</h2>
      <Flex flexWrap="wrap" alignItems="top" mb={"6rem"}>
        <Box width={[1, 1 / 2]} pr={[4]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2]} pl={[4]}>
          <h3 className="mt0">Sales</h3>
          <p>For all sales inquiries please contact:</p>
        </Box>
      </Flex>
      <Flex flexWrap="wrap" alignItems="top" mb={"6rem"}>
        <Box width={[1, 1 / 2]} pr={[4]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2]} pl={[4]}>
          <h3 className="mt0">International</h3>
          <p>For all other international inquiries please contact:</p>
        </Box>
      </Flex>
      <Flex flexWrap="wrap" alignItems="top" mb={"6rem"}>
        <Box width={[1, 1 / 2]} pr={[4]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2]} pl={[4]}>
          <h3 className="mt0">CEO</h3>
          <p>You are also welcome to contact our CEO in according matters:</p>
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default ContactPage
