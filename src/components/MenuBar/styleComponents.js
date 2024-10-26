import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const MenuBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    align-self: center;
    height: 100%;
    justify-content: center;
  }
`

export const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 767px) {
    padding-left: 70px;
  }
`

export const HomeIcon = styled(AiFillHome)`
  height: 17px;
  width: 17px;
  color: ${props => props.iconcolor};
`
export const TrendingIcon = styled(HiFire)`
  height: 17px;
  width: 17px;
  color: ${props => props.iconcolor};
`
export const GamingIcon = styled(SiYoutubegaming)`
  height: 17px;
  width: 17px;
  color: ${props => props.iconcolor};
`

export const SavedIcon = styled(MdPlaylistAdd)`
  height: 17px;
  width: 17px;
  color: ${props => props.iconcolor};
`

export const MenuName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.textColor};
  margin-left: 20px;
  font-weight: ${props => props.boldText};
`
