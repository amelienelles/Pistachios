import styled from "styled-components"
import Link from "gatsby-link"
import { Flex } from "grid-styled"

export const Article = styled.article`
  margin: 1.5rem 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  /* max-width: 1000px; */
  min-height: 600px;
  padding: 0;
`

export const Footer = styled.footer`
  background: #8f8978;
  height: 600px;
  padding: 27px 0;
`

export const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
  }
`

export const H2 = styled.h2`
  margin-bottom: 0;
`

export const Header = styled.header`
  background: #00a23d;
  margin-bottom: 0;
  padding: 0.5rem 0;
  @media (min-width: 48em) {
    padding: 1.5rem 0;
  }
`

export const HeaderSection = styled.section`
  /* font-size: 1rem; */
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
}
`

export const Hr = styled.hr`
  margin-bottom: 3rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

export const Img = styled.img`
  margin-bottom: 0;
  width: 100%;
`

export const ImgPerson = styled.img`
  border-radius: 50%;
  border: solid 3px #eee;
  margin-bottom: 0;
  max-width: 100%;
`

export const ImgCaption = styled.div`
  text-align: center;
`

export const LogoBrand = styled.span`
  color: #fff;
  font-family: "DS Arabic";
  font-size: 2.3888889rem;
  @media (min-width: 32em) {
    font-size: 3.3888889rem;
  }
  @media (min-width: 48em) {
    font-size: 4.3888889rem;
  }
  line-height: 3rem;
  text-decoration: none;
`

export const LogoText = styled.span`
  color: #fff;
  font-size: 1.7777778rem;
  line-height: 3rem;
  line-height: 3rem;
  text-decoration: none;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
`

export const NavItem = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  white-space: nowrap;
`

export const Picture = styled.picture`
  width: 100%;
  margin-bottom: 1rem;
`

export const Section = styled.section`
  margin: 0 auto;
  margin-bottom: 6rem;
  max-width: 1200px;
  padding: 0 0.5rem;
  }
`

export const Source = styled.source`
  margin-bottom: 0;
  width: 100%;
`

export const StyledLink = styled(Link)`
  color: #fff;
  align-self: baseline;
`

export const StyledFlex = styled(Flex)`
  flex-wrap: wrap;
`
