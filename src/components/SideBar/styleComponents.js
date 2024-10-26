import styled from 'styled-components'

export const SideBarContainer = styled.div`
  height: 90vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px 30px 0px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  padding-left: 20px;
`

export const FooterHeading = styled.p`
  font-size: 15px;
  color: ${props => props.textColor};
  margin-bottom: 20px;
  font-weight: bold;
`

export const FooterPara = styled.p`
  font-size: 15px;
  color: ${props => props.textColor};
  margin-bottom: 20px;
  font-weight: 500;
`

export const FooterImagesContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const FooterImageLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`
