import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-bottom: 40px;
`

export const VideoCardContainer = styled.li`
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const VideoImage = styled.img`
  height: 210px;
  width: 400px;
  flex-shrink: 0;
  @media screen and (max-width: 992px) {
    width: 300px;
  }
  @media screen and (max-width: 767px) {
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const VideoContent = styled.div`
  display: flex;
  flex-grow: 1;
  @media screen and (max-width: 576px) {
    margin-top: 15px;
    margin-left: 15px;
  }
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
  font-size: 20px;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const VideoPara = styled.li`
  color: ${props => props.paraColor};
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 10px;
  list-style-type: none;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
`

export const ViewsContent = styled.li`
  list-style-type: none;
  color: ${props => props.paraColor};
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    list-style-type: disc;
  }
`

export const TimePara = styled.li`
  list-style-type: disc;
  color: ${props => props.paraColor};
  font-size: 14px;
  font-family: 'Roboto';
  margin-left: 25px;
`

export const ViewsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
  list-style-type: disc;
  margin-top: 15px;
  @media screen and (max-width: 576px) {
    padding-left: 25px;
    margin-top: 0px;
  }
`

export const Para = styled.p`
  margin: 0px;
`

export const ChannelLogo = styled.img`
  height: 35px;
  width: 35px;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`
export const TextDetails = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  padding-left: 0px;
  @media screen and (max-width: 576px) {
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
`
