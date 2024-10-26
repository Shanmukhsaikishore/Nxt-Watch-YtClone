import ThemeContext from '../../context/ThemeContext'

import {
  MenuBarContainer,
  MenuItem,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  MenuName,
  LinkItem,
} from './styleComponents'

const MenuBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, currentPath, changeTab} = value

      const onClickHome = () => {
        changeTab('/')
      }

      const onClickTrending = () => {
        changeTab('/trending')
      }

      const onClickGaming = () => {
        changeTab('/gaming')
      }

      const onClickSaved = () => {
        changeTab('/saved-videos')
      }

      const highlightTab = isDark ? '#424242' : '#f4f4f4'

      const iconColor = isDark ? '#606060' : '#475569'

      const textColor = isDark ? '#ffffff' : '#0f0f0f'

      return (
        <MenuBarContainer>
          <LinkItem to="/">
            <MenuItem
              bgColor={
                currentPath === '/' || currentPath === ''
                  ? highlightTab
                  : 'transparent'
              }
              type="button"
              onClick={onClickHome}
            >
              <HomeIcon
                iconcolor={
                  currentPath === '/' || currentPath === ''
                    ? '#ff0000'
                    : iconColor
                }
              />
              <MenuName
                boldText={
                  currentPath === '/' || currentPath === '' ? 'bold' : 'none'
                }
                textColor={textColor}
              >
                Home
              </MenuName>
            </MenuItem>
          </LinkItem>
          <LinkItem to="/trending">
            <MenuItem
              type="button"
              onClick={onClickTrending}
              bgColor={
                currentPath === '/trending' ? highlightTab : 'transparent'
              }
            >
              <TrendingIcon
                iconcolor={currentPath === '/trending' ? '#ff0000' : iconColor}
              />
              <MenuName
                boldText={currentPath === '/trending' ? 'bold' : 'none'}
                textColor={textColor}
              >
                Trending
              </MenuName>
            </MenuItem>
          </LinkItem>
          <LinkItem to="/gaming">
            <MenuItem
              type="button"
              bgColor={currentPath === '/gaming' ? highlightTab : 'transparent'}
              onClick={onClickGaming}
            >
              <GamingIcon
                iconcolor={currentPath === '/gaming' ? '#ff0000' : iconColor}
              />
              <MenuName
                boldText={currentPath === '/gaming' ? 'bold' : 'none'}
                textColor={textColor}
              >
                Gaming
              </MenuName>
            </MenuItem>
          </LinkItem>
          <LinkItem to="/saved-videos">
            <MenuItem
              type="button"
              bgColor={
                currentPath === '/saved-videos' ? highlightTab : 'transparent'
              }
              onClick={onClickSaved}
            >
              <SavedIcon
                iconcolor={
                  currentPath === '/saved-videos' ? '#ff0000' : iconColor
                }
              />
              <MenuName
                boldText={currentPath === '/saved-videos' ? 'bold' : 'none'}
                textColor={textColor}
              >
                Saved Videos
              </MenuName>
            </MenuItem>
          </LinkItem>
        </MenuBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuBar
