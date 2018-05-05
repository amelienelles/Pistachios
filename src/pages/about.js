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

      <p>We were founded in 1988 (???) by ???</p>

      <p>
        Our mission was to produce pistachios of the highest quality. Since then
        we have continuously grown. At the moment we are producing 2000 tons of
        pistachios per year. If you want to find our more about our production
        have a look at production.
      </p>

      <h3>Long term relationships</h3>
      <DCPicture img={img["00"]} />
      <p>
        We want to build long term relationships. We understand that you need
        reliable delivery and defined quality. Why don't you come and visit us?
      </p>

      <h3>Our group</h3>
      <DCPicture img={img["00"]} />
      <p>
        Persiska Pistachios is part of a big group:{" "}
      </p>
      <p>
        So we are strong in terms of financing, we have reliable partners,
        access to machines and strong management partnerships.
      </p>

      <h3>Meet our team</h3>
      <DCPicture img={img["00"]} />
      <p>
        These are the people we rely on. They all share our overall vision
        &mdash; to just produce the best pistachios possible.
      </p>
    </Section>
  </Container>
)

export default AboutPage
