import styled from 'styled-components'

import {SiYoutubegaming} from 'react-icons/si'

export const GamingHomeContainer = styled.div`
  width: 100%;
  display: flex;
`

export const GamingMainContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow: auto;
`

export const GamingBanner = styled.div`
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

export const GamingIcon = styled(SiYoutubegaming)`
  height: 35px;
  width: 35px;
  color: #ff0000;
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 30px;
  }
`

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.textColor};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const GamingVideosList = styled.ul`
  display: flex;
  padding-top: 30px;
  height: 100%;
  overflow: auto;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    justify-content: space-between;
  }
  @media screen and (max-width: 576px) {
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
    justify-content: space-between;
  }
`

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 250px;
  width: 300px;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 200px;
  }
`
export const FailureHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => props.textColor};
  margin-bottom: 5px;
  text-align: center;
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.paraColor};
  font-weight: 400;
  margin-top: 5px;
  text-align: center;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`