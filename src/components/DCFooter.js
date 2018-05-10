import React from "react"
import {
  Footer,
  FooterSection,
  LinkFooterStyled as Link
} from "../components-styled"

const DCFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Cologne Business School</p>
      <div>
        <Link to="/imprint">Imprint</Link>
        <br /> Version: {props.date}
        <p>
          Browser: {props.browser.name} {props.browser.version}
        </p>
      </div>
    </FooterSection>
  </Footer>
)

export default DCFooter
