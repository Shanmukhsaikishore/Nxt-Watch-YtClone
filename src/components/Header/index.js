import Cookies from 'js-cookie'

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ThemeContext from '../../context/ThemeContext'

import MenuBar from '../MenuBar'

import {
  NavBar,
  NavLogo,
  NavItemsContainer,
  ThemeButton,
  SunIcon,
  MoonIcon,
  ProfileImage,
  LogoutButton,
  Model,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ModelContent,
  LogoutSmButton,
  LogoutIcon,
  MenuButton,
  MenuIcon,
  CloseButton,
  CloseIcon,
  MenuSmContainer,
} from './styleComponents'

import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const bgColor = isDark ? '#212121' : '#ffffff'

        const logoutColor = isDark ? '#ffffff' : '#3b82f6'

        const iconColor = isDark ? '#ffffff' : '#000000'

        const textColor = isDark ? '#ffffff' : '#00306e'

        const onChangeTheme = () => {
          changeTheme()
        }

        return (
          <NavBar bgColor={bgColor}>
            <Link to="/">
              <NavLogo src={imgUrl} alt="website logo" />
            </Link>
            <NavItemsContainer>
              <li className="nav-item">
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={onChangeTheme}
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </ThemeButton>
              </li>
              <li className="nav-item">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <Popup
                modal
                trigger={
                  <li className="nav-item">
                    <MenuButton type="button">
                      <MenuIcon iconcolor={iconColor} />
                    </MenuButton>
                  </li>
                }
              >
                {close => (
                  <MenuSmContainer bgColor={bgColor}>
                    <CloseButton type="button" onClick={() => close()}>
                      <CloseIcon iconcolor={iconColor} />
                    </CloseButton>
                    <MenuBar />
                  </MenuSmContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <li className="nav-item">
                    <LogoutButton logoutColor={logoutColor} type="button">
                      Logout
                    </LogoutButton>
                  </li>
                }
                className="popup-content"
              >
                {close => (
                  <Model bgColor={bgColor}>
                    <ModelContent textColor={textColor}>
                      Are you sure, you want to logout
                    </ModelContent>
                    <ButtonContainer className="button-container">
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonContainer>
                  </Model>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <li className="nav-item">
                    <LogoutSmButton type="button">
                      <LogoutIcon iconcolor={iconColor} />
                    </LogoutSmButton>
                  </li>
                }
                className="popup-content"
              >
                {close => (
                  <Model bgColor={bgColor}>
                    <ModelContent textColor={textColor}>
                      Are you sure, you want to logout
                    </ModelContent>
                    <ButtonContainer className="button-container">
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonContainer>
                  </Model>
                )}
              </Popup>
            </NavItemsContainer>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
