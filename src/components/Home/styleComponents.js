import styled from 'styled-components'

import {IoMdClose} from 'react-icons/io'

import {IoSearch} from 'react-icons/io5'

export const HomeBgContainer = styled.div`
  width: 100%;
  display: flex;
`

export const HomeMainContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  overflow: auto;
`

export const BannerContainer = styled.div`
  display: ${props => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  height: 30vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  @media screen and (max-width: 767px) {
    padding-left: 20px;
  }
`

export const BannerLogo = styled.img`
  height: 35px;
  width: 130px;
`

export const CloseIcon = styled(IoMdClose)`
  height: 20px;
  width: 25px;
  margin: 0px;
  color: ${props => props.iconcolor};
`

export const CloseButton = styled.button`
  padding: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`

export const BannerContent = styled.p`
  font-family: 'Roboto';
  display: ${props => (props.hidden ? 'none' : 'flex')};
  font-size: 16px;
  margin-bottom: 30px;
  color: #1e293b;
`
export const BannerButton = styled.button`
  height: 40px;
  width: 120px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #1e293b;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 500px;
  padding: 30px;
  @media screen and (max-width: 767px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const SearchInput = styled.input`
  width: 85%;
  padding-left: 15px;
  height: 35px;
  border: 1px solid ${props => props.borderColor};
  outline: none;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: ${props => props.inputBgColor};
  color: ${props => props.textColor};
`

export const SearchButton = styled.button`
  background-color: ${props => props.searchBgColor};
  height: 100%;
  width: 15%;
  border: 1px solid ${props => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SearchIcon = styled(IoSearch)`
  height: 15px;
  width: 15px;
  color: #606060;
`

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideosContainer = styled.ul`
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
  }
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`
export const FailureImage = styled.img`
  height: 250px;
  width: 300px;
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
