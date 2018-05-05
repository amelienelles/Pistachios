import React from "react"
import Link from "gatsby-link"
import {
  Container,
  StyledFlex as Flex,
  Picture,
  Section,
  Hr
} from "../components-styled"

import { Box } from "grid-styled"
import img from "../img"
import DCPicture from "../components/DCPicture.js"

const ProductsPage = () => (
  <Container>
    <DCPicture img={img["01"]} />
    <Section>
      <h1 id="pistachios" className="mb0">
        Persiska Pistachios
      </h1>
      <h3 id="pistachios" className="mt0">
        Pistachios with taste and quality.
      </h3>
      <p>
        Welcome to Persiska Pistachios. We love pistachios so much, you can say
        we breath them. Have a look at our products.
      </p>
    </Section>

    <Section>
      <h2 id="products">Our Products</h2>
      <DCPicture img={img["05"]} />

      <p>
        You would like some samples. We are looking forward to speaking to you.
        Please contact us.
      </p>

      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["00"]} />
          <h3>Khaligari</h3>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["00"]} />
          <h3>Khaligari</h3>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["00"]} />
          <h3>Khaligari</h3>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["00"]} />
          <h3>Khaligari</h3>
        </Box>
      </Flex>
    </Section>

    <Section>
      <h2 id="quality">Quality & Control</h2>
      <DCPicture img={img["04"]} />
      <p>
        We are striving to reach the highest quality for our pistachios. For
        this we are trying to do everything. You want certificates? We adhere to
        both European and International standards.
      </p>
      <p />
    </Section>

    <Section>
      <h2 id="transport">Transport & Shipping</h2>
      <DCPicture img={img["03"]} />
      <p>
        We ship to the whole world. We offer FOB, CFR and CIF, no problem.
        Please talk to us.
      </p>
    </Section>
  </Container>
)

export default ProductsPage