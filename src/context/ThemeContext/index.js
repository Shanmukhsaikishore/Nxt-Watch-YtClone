import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  currentPath: '/',
  changeTab: () => {},
  savedVideos: [],
  addToSaved: () => {},
  likedVideos: [],
  dislikedVideos: [],
  addToLiked: () => {},
  addToDisliked: () => {},
})

export default ThemeContext
