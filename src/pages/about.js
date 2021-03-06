import React from "react"

import {
  Container,
  Img,
  Section,
  StyledFlex as Flex
} from "../components-styled"
import { Box } from "grid-styled"
import img from "../img"
import DCPicture from "../components/DCPicture.js"

const AboutPage = () => (
  <Container>
    <DCPicture img={img["00"]} />
    <Section>
      <h2>About us</h2>

      <h3>Many years experience</h3>

      <p>
        Founded in 19xx, we have declared it our mission to provide the world
        with the best Iranian pistachios. We have grown inside Iran and beyond
        its borders as a supplier of high-quality pistachios, currently
        producing over 2000 tons of pistachios each year. Through successful
        expansion we have established a network of suppliers and partners that
        work together to satisfy your needs. Together we strive for quality and
        are committed to add value for our customers.
      </p>

      <p>
        If you want to find our more about our production have a look at
        production.
      </p>

      <h3>Long term partnerships</h3>
      <DCPicture img={img["00"]} />
      <p>
        Since the beginning of our mission we have always engaged in fair and
        equal partnerships. Our partners have grown together with us, and we are
        proud to present to you the companies we work with in close cooperation.
      </p>

      <h3>Our group</h3>
      <DCPicture img={img["00"]} />
      <p>Persiska Pistachios is part of a big group: </p>
      <p>
        So we are strong in terms of financing, we have reliable partners,
        access to machines and strong management partnerships.
      </p>

      <h3>Meet our team</h3>
      <DCPicture img={img["00"]} />
      <p>
        The team behind Persiska Pistachios consists of more than just business
        partners. Throughout our endeavor, we have strengthened our friendship
        and are now one big family. From administration to harvesting, from
        sales to purchasing: We personally engage in each activity of our
        value-chain and work together to maintain a maximum level of quality.
      </p>
      <p>
        These are the people we rely on. They all share our overall vision
        &mdash; to just produce the best pistachios possible.
      </p>
    </Section>
  </Container>
)

export default AboutPage
