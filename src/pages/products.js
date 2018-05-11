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
      <h3 className="mt0">Iranian pistachios with great taste and quality.</h3>
      <p>
        Welcome to Persiska Pistachios &mdash; pistachios from Iran. We love
        pistachios so much, you can say we breath them. Have a look at our
        products.
      </p>
    </Section>

    <Section>
      <h2 id="history" className="mb0">
        The History of Iranian Pistachios
      </h2>
      <p>
        Pistachios have been part of the Iranian culture for thousands of years,
        and still today they are omnipresent in our everyday lives. From
        festivities and beliefs to stories and literature: the “green almond”
        plays an essential role for Iranians and their sense of nationality. We
        eat them during Norouz (the Iranian New Year), weddings, and even
        funerals. Be it a decoration or an ingredient for traditional treats: No
        feast can be held without pistachios and their close cousins (such as
        almonds, hazelnuts, walnuts, and the like).
      </p>
      <p>
        Not only are pistachios an important part of the Iranian culture, but
        they are also a large pillar of the agricultural business in our
        country. 200,000 tons of pistachio exports prove that none other than
        the pioneers of pistachio cultivation are able to deliver the royal
        quality that the kings of ancient Iran demanded. The Kerman province in
        south-east Iran is one of the most fertile grounds for pistachio
        cultivation, which is where we source our (dainty) treats.
      </p>
      <p>
        Pistachios have been a delicacy for kings and emperors all across the
        world. Now, it is time to offer this cultural treasure to all the people
        in the world, strengthening the cultural ties between Iran and the rest
        of the world through our common passion, love and appreciation for
        pistachios.
      </p>
    </Section>

    <Section>
      <h2 id="types">Our Pistachios</h2>
      <DCPicture img={img["05"]} />

      <p>
        Iranian Pistachios have a great reputation for their unrivaled world
        class taste. Their additional layer and higher unsaturated fat content
        lend them a unique and unforgettable mark that their buyers love it for.
        Not only are all Iranian pistachios tasty and healthy, but there are
        also four sub-categories that add their own individual flavor. They also
        come in several variations (such as opened, closed, roasted, salted,
        with added lime, or many other combinations), and with numerous new ones
        coming every day. No matter which one you choose, we are committed to
        harvest the best pistachios that Iranian soil can offer. In the
        following we will highlight our fine selection of pistachios and why our
        customers appreciate them.
      </p>

      <p>
        You would like some samples. We are looking forward to speaking to you.
        Please <Link to="/contact">contact us</Link>.
      </p>

      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]} pr={[3]}>
          <DCPicture img={img["00"]} />
          <h3>Fandoghi</h3>
          <h4>Sizes: 28/30, 30/32, 32/34</h4>
          <p>
            Fandoghi is the most popular type of pistachio. Our customers enjoy
            its round shape and their small size, which makes them easy to
            handle and open. Over the last years, around 50% of all Iranian
            pistachios have been Fandoghis, underlining its growing popularity
            outside of Iran.
          </p>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[1]} pr={[2]}>
          <DCPicture img={img["00"]} />
          <h3>Kalleh Qhouchi</h3>
          <h4>Sizes: 20/22, 22/24, 24/26</h4>
          <p>
            Also known as »jumbos«, Kaleh Qouchi pistachios are famous for their
            large size. Even though they are sensitive to shortages of water and
            other environmental factors, their yields are higher than average.
            Many farmers have reduced their commitment to cultivate pistachios
            of type Kaleh Qouchi.
          </p>
          <p>
            We, however, have chosen to keep harvesting them for our customers
            and numerous Kaleh Qouchi fans all over the world: they have asked
            us to continue their production and to keep offering one of the most
            popular pistachio types. They have a unique taste, size, and
            composition, which is why they deserve to be part of our handpicked
            selection.
          </p>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[2]} pr={[1]}>
          <DCPicture img={img["00"]} />
          <h3>Akbari</h3>
          <h4>Sizes: 20/22, 22/24, 24/26</h4>
          <p>
            Akbari is one of the newcomers among the pistachio types. Its long
            and large hull resembles an almond, though its customers find it
            very easy to open and enjoy their larger sized kernel.
          </p>
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]} pl={[3]}>
          <DCPicture img={img["00"]} />
          <h3>Ahmad Agaei</h3>
          <h4>Sizes: 22/24, 24/26, 26/28</h4>
          <p>
            Amongst the so called »long pistachio types«, Ahmad Aghaei is often
            referred to as »the fat man« for its rather large, almond-like look.
            It has a round shell and a big, tasteful kernel that is especially
            popular in Greece and India. Also, it has one of the lowest
            maturation times and the whitest shell hue amongst long pistachios.
          </p>
        </Box>
      </Flex>
    </Section>

    <Section>
      <h2 id="preprocessed">Pre-processed Pistachios</h2>
      <DCPicture img={img["00"]} />

      <p>
        Besides offering the above mentioned pistachios types, we can also offer
        marginally processed pistachios. Upon request, we can blanch, peel,
        sort, and salt our unprocessed pistachios for your needs. For further
        information, please <Link to="/contact">contact</Link> our department of
        international affairs.
      </p>
    </Section>

    <Section>
      <h2 id="quality">Quality & Control</h2>
      <DCPicture img={img["04"]} />
      <p>
        We are striving to reach the highest quality for our pistachios. For
        this we are trying to do everything. You want certificates? We adhere to
        both European and international standards.
      </p>
      <p />
    </Section>

    <Section>
      <h2 id="transport">Transport & Shipping</h2>
      <DCPicture img={img["03"]} />
      <p>
        We ship to the whole world. We offer FOB, CFR and CIF, no problem.
        Please <Link to="/contact">talk to us</Link>.
      </p>
    </Section>
  </Container>
)

export default ProductsPage
