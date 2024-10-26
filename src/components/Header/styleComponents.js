import {FiSun} from 'react-icons/fi'

import {FaMoon} from 'react-icons/fa'

import {HiOutlineLogout} from 'react-icons/hi'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import styled from 'styled-components'

export const NavBar = styled.nav`
  padding: 15px 40px 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const NavLogo = styled.img`
  height: 30px;
  width: 140px;
  @media screen and (max-width: 767px) {
    height: 25px;
    width: 120px;
  }
`

export const NavItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const ThemeButton = styled.button`
  padding: 0px;
  background-color: transparent;
  border: none;
  margin-top: 4px;
  cursor: pointer;
  margin-right: 25px;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const SunIcon = styled(FiSun)`
  height: 25px;
  width: 25px;
  color: #ffffff;
`

export const MoonIcon = styled(FaMoon)`
  height: 25px;
  width: 25px;
  @media screen and (max-width: 767px) {
    height: 20px;
    width: 25px;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 25px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.logoutColor};
  height: 25px;
  width: 80px;
  border: 1px solid ${props => props.logoutColor};
  background-color: transparent;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutSmButton = styled.button`
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`

export const LogoutIcon = styled(HiOutlineLogout)`
  height: 25px;
  width: 30px;
  margin: 0px;
  color: ${props => props.iconcolor};
`

export const Model = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    padding: 15px;
    width: 300px;
  }
`

export const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  color: #475569;
  border: 1px solid #475569;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  height: 35px;
  width: 80px;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`

export const ModelContent = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  margin-bottom: 40px;
  margin-top: 30px;
`

export const MenuButton = styled(LogoutSmButton)`
  margin-right: 10px;
`

export const MenuIcon = styled(GiHamburgerMenu)`
  height: 25px;
  width: 25px;
  margin: 0px;
  color: ${props => props.iconcolor};
`
export const CloseIcon = styled(IoMdClose)`
  height: 30px;
  width: 30px;
  margin: 0px;
  color: ${props => props.iconcolor};
`

export const CloseButton = styled(LogoutSmButton)`
  align-self: flex-end;
  margin-right: 30px;
`

export const MenuSmContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding-top: 30px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
