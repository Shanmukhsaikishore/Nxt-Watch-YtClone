import {BgContainer, Image, Heading, Para} from './styleComponents'

const NotFound = () => (
  <BgContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </BgContainer>
)

export default NotFound
