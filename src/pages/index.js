import React from "react"
import Link from "gatsby-link"
import { Container, Picture, Section, Hr } from "../components-styled"

import { Flex, Box } from "grid-styled"
import img from "../img"
import DCPicture from "../components/DCPicture.js"

const IndexPage = () => (
  <Container>
    <Section>
      <Flex flexDirection="column" alignItems="center" mt={"3rem"}>
        <p>
          <strong>
            This is a student's project from{" "}
            <a href="https://cbs.de/" target="_blank">
              Cologne Business School
            </a>{" "}
            on pistachios.
          </strong>
        </p>
        <p>
          <strong>
            This is work in progress so this site is most likely not complete.
          </strong>
        </p>
      </Flex>
    </Section>
  </Container>
)

export default IndexPage
