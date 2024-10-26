import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
  width: 370px;
  margin-right: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: 767px) {
    width: 49%;
    margin-right: 0px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
`

export const VideoImage = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 180px;
  }
  @media screen and (max-width: 576px) {
    height: 200px;
  }
`

export const VideoContent = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`
export const Title = styled.p`
  font-weight: 500;
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0px;
`

export const VideoPara = styled.p`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 5px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    margin-top: 5px;
  }
`

export const ViewsContent = styled.li`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 15px;
  list-style-type: none;
`

export const Para = styled.p`
  margin: 0px;
`

export const TimeContent = styled(ViewsContent)`
  margin-left: 10px;
  list-style-type: disc;
`

export const ChannelLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 15px;
`

export const ViewsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: disc;
  padding-left: 0px;
`
