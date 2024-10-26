import ThemeContext from '../../context/ThemeContext'

import MenuBar from '../MenuBar'

import {
  SideBarContainer,
  Footer,
  FooterHeading,
  FooterPara,
  FooterImagesContainer,
  FooterImageLogo,
} from './styleComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const bgColor = isDark ? '#212121' : '#ffffff'

      const textColor = isDark ? '#ffffff' : '#1e293b'

      return (
        <SideBarContainer bgColor={bgColor}>
          <MenuBar />
          <Footer>
            <FooterHeading textColor={textColor}>CONTACT US</FooterHeading>
            <FooterImagesContainer>
              <FooterImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <FooterImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <FooterImageLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterImagesContainer>
            <FooterPara textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </FooterPara>
          </Footer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
