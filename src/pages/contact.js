import React from "react"

import { Container, Img, Section } from "../components-styled"

import { Flex, Box } from "grid-styled"
import img from "../img"
import DCPicture from "../components/DCPicture.js"

const ContactPage = () => (
  <Container>
    <DCPicture img={img["09"]} />
    <Section>
      <h2>Contact</h2>
      <Flex flexWrap="wrap" alignItems="top" mb={"6rem"}>
        <Box width={[1, 1 / 2]} pr={[4]}>
          <DCPicture img={img["00"]} />
        </Box>
        <Box width={[1, 1 / 2]} pl={[4]}>
          <h3 className="mt0">Sales</h3>
          <p>
            Our sales department has successfully worked with several Iranian
            and international companies. We are happy to provide you with
            additional information and engage in fruitful partnerships. For more
            information, contact us under 12-3456-78910.
          </p>
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
          <p>
            Mr. ??? is the CEO of »Persiska Pistachios« and has many years of
            experience in the field of growing pistachios. He is personally
            committed to provide the best pistachios to his customers and is
            happy to provide you with further necessary information. For special
            business inquiries, contact him on 444-444-444.
          </p>
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default ContactPage
