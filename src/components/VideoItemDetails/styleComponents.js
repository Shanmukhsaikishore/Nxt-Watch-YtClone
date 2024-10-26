import styled from 'styled-components'

import {BiLike, BiDislike} from 'react-icons/bi'

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

export const SuccessContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 30px;
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
  color: ${props => props.paracolor};
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

export const PlayerContainer = styled.div`
  width: 100%;
  padding: 30px 30px 0px 30px;
  height: 80%;
  @media screen and (max-width: 767px) {
    padding: 20px 0px 0px 0px;
    height: 50%;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
  }
`

export const Title = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.textColor};
`

export const Para = styled.p`
  margin: 0px;
`

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ViewsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: disc;
  padding-left: 0px;
`

export const ViewsContent = styled.li`
  color: ${props => props.paracolor};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 15px;
  list-style-type: none;
`

export const TimeContent = styled(ViewsContent)`
  margin-left: 10px;
  list-style-type: disc;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-top: 5px;
  }
`

export const ButtonElement = styled.button`
  border: none;
  padding: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.paracolor};
`

export const LikeIcon = styled(BiLike)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  color: ${props => props.paracolor};
`
export const DisLikeIcon = styled(BiDislike)`
  height: 19px;
  width: 20px;
  margin-right: 5px;
  color: ${props => props.paracolor};
`

export const SavedIcon = styled(MdPlaylistAdd)`
  height: 20px;
  width: 20px;
  color: ${props => props.paracolor};
  margin-right: 5px;
`

export const Seperator = styled.hr`
  width: 100%;
  border: 1px solid ${props => props.sepcolor};
  margin-top: 20px;
  margin-bottom: 20px;
`

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  align-items: center;
`

export const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 15px;
`

export const BottomTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
  color: ${props => props.textColor};
`

export const BottomPara = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 0px;
  color: ${props => props.paracolor};
`

export const Description = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.textColor};
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const DescriptionSm = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.textColor};
  display: none;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    display: block;
  }
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  align-self: flex-start;
`
