import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    margin-right: 0px;
    width: 32%;
  }
  @media screen and (max-width: 576px) {
    width: 48%;
    margin-right: 0px;
  }
`

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const VideoImage = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    height: 230px;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 0px;
  margin-top: 15px;
  color: ${props => props.textColor};
`

export const VideoPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 5px;
  color: ${props => props.paraColor};
`
