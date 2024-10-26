import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import VideoCard from '../VideoCard'

import {
  HomeBgContainer,
  HomeMainContainer,
  BannerContainer,
  BannerLogo,
  CloseButton,
  CloseIcon,
  BannerContent,
  BannerButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  LoaderContainer,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  noResults: 'NO_RESULTS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    hideBanner: false,
    searchText: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  onClickClose = () => {
    this.setState({hideBanner: true})
  }

  onChangeSearchText = e => {
    this.setState({searchText: e.target.value})
  }

  onClickRetry = () => {
    this.setState({searchText: ''}, this.getVideosData)
  }

  onClickSearch = () => {
    this.getVideosData()
  }

  onPressEnter = e => {
    if (e.key === 'Enter') {
      this.getVideosData()
    }
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      if (updatedData.length === 0) {
        this.setState({apiStatus: apiStatusConstants.noResults})
      } else {
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosList: updatedData,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <VideosContainer>
        {videosList.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </VideosContainer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const textColor = isDark ? '#ffffff' : '#1e293b'

        const paraColor = isDark ? '#7e858e' : '#475569'

        return (
          <FailureContainer>
            <FailureImage src={imgUrl} alt="failure view" />
            <FailureHeading textColor={textColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara paraColor={paraColor}>
              We are having some trouble completing your request. Please try
              again.
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoResultsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const textColor = isDark ? '#ffffff' : '#1e293b'

        const paraColor = isDark ? '#7e858e' : '#475569'

        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading textColor={textColor}>
              No Search Results Found
            </FailureHeading>
            <FailurePara paraColor={paraColor}>
              Try different key words or remove search filter
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAll = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.noResults:
        return this.renderNoResultsView()
      default:
        return null
    }
  }

  render() {
    const {hideBanner} = this.state
    const {searchText} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const bgColor = isDark ? '#181818' : '#f9f9f9'

          const inputBgColor = isDark ? 'transparent' : '#ffffff'

          const searchBgColor = isDark ? '#383838' : 'transparent'

          const textColor = isDark ? '#ffffff' : '#000000'

          const borderColor = isDark ? '#606060' : '#909090'

          return (
            <>
              <Header />
              <HomeBgContainer>
                <SideBar />

                <HomeMainContainer bgColor={bgColor} data-testid="home">
                  <BannerContainer data-testid="banner" hidden={hideBanner}>
                    <CloseButton
                      data-testid="close"
                      type="button"
                      onClick={this.onClickClose}
                    >
                      <CloseIcon />
                    </CloseButton>
                    <BannerLogo
                      alt="nxt watch logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                    <BannerContent>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerContent>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerContainer>
                  <SearchContainer>
                    <SearchInput
                      inputBgColor={inputBgColor}
                      borderColor={borderColor}
                      type="search"
                      value={searchText}
                      onChange={this.onChangeSearchText}
                      placeholder="Search"
                      textColor={textColor}
                      onKeyDown={this.onPressEnter}
                    />
                    <SearchButton
                      onClick={this.onClickSearch}
                      searchBgColor={searchBgColor}
                      borderColor={borderColor}
                      type="button"
                      data-testid="searchButton"
                    >
                      <SearchIcon />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderAll()}
                </HomeMainContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
