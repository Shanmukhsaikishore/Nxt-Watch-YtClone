import {Component} from 'react'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    currentPath: '/',
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  componentDidMount() {
    const {location} = this.props
    const {pathname} = location
    this.setState({currentPath: pathname})
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = path => {
    this.setState({currentPath: path})
  }

  addToSaved = item => {
    const {savedVideos} = this.state
    const isSaved = savedVideos.find(each => each.id === item.id)
    if (isSaved) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(each => each.id !== item.id),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, item],
      }))
    }
  }

  addToLiked = item => {
    const {likedVideos} = this.state
    const isLiked = likedVideos.find(each => each.id === item.id)
    if (isLiked) {
      this.setState(prevState => ({
        likedVideos: prevState.likedVideos.filter(each => each.id !== item.id),
      }))
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, item],
        dislikedVideos: prevState.dislikedVideos.filter(
          each => each.id !== item.id,
        ),
      }))
    }
  }

  addToDisliked = item => {
    const {dislikedVideos} = this.state
    const isDisiked = dislikedVideos.find(each => each.id === item.id)
    if (isDisiked) {
      this.setState(prevState => ({
        dislikedVideos: prevState.likedVideos.filter(
          each => each.id !== item.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.likedVideos, item],
        likedVideos: prevState.dislikedVideos.filter(
          each => each.id !== item.id,
        ),
      }))
    }
  }

  render() {
    const {
      isDark,
      currentPath,
      savedVideos,
      likedVideos,
      dislikedVideos,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          currentPath,
          savedVideos,
          changeTab: this.changeTab,
          addToSaved: this.addToSaved,
          likedVideos,
          dislikedVideos,
          addToLiked: this.addToLiked,
          addToDisliked: this.addToDisliked,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
