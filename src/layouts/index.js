import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import DCHeader from "../components/DCHeader.js"
import DCFooter from "../components/DCFooter.js"
import { Container } from "../components-styled"
import "prismjs/themes/prism.css"
import "./app.css"
import "./gridlover.css"
import bowser from "bowser"

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Persiska Pistachios"
      meta={[
        {
          name: "description",
          content:
            "This website informs you about pistachios from Persiska Pistachios."
        },
        {
          name: "keywords",
          content: "Pistachios, Iran,"
        }
      ]}
    >
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <div>
      <DCHeader />
      <Container>{children()}</Container>
      <DCFooter
        version={data.site.siteMetadata.version}
        date={data.site.siteMetadata.date}
        browser={bowser}
      />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        version
        date
      }
    }
  }
`
