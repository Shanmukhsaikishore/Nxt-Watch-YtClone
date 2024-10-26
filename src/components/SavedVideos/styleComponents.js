import styled from 'styled-components'

import {MdPlaylistAdd} from 'react-icons/md'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
`

export const MainContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow: auto;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
export const FailureImage = styled.img`
  width: 40%;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => props.textColor};
  margin-bottom: 10px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 27px;
  }
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.paraColor};
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const Banner = styled.div`
  display: flex;
  background-color: ${props => props.bannerBg};
  padding: 20px 0px 20px 40px;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 10px 0px 10px 20px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.iconBg};
  height: 90px;
  width: 90px;
  border-radius: 45px;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
`

export const SavedIcon = styled(MdPlaylistAdd)`
  height: 35px;
  width: 35px;
  color: #ff0000;
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 30px;
  }
`

export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.textColor};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: 767px) {
    padding: 10px 20px 10px 20px;
  }
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`
