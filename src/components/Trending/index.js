import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingHomeContainer,
  TrendingMainContainer,
  TrendingBanner,
  IconContainer,
  FireIcon,
  TrendingHeading,
  TrendingVideosList,
  LoaderContainer,
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
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingList: updatedData,
      })
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
    const {trendingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const bannerBg = isDark ? '#181818' : '#f1f1f1'

          const iconBg = isDark ? '#0f0f0f' : '#e2e8f0'

          const textColor = isDark ? '#ffffff' : '#1e293b'

          return (
            <>
              <TrendingBanner bannerBg={bannerBg}>
                <IconContainer iconBg={iconBg}>
                  <FireIcon />
                </IconContainer>
                <TrendingHeading textColor={textColor}>
                  Trending
                </TrendingHeading>
              </TrendingBanner>
              <TrendingVideosList>
                {trendingList.map(each => (
                  <TrendingVideoCard key={each.id} videoDetails={each} />
                ))}
              </TrendingVideosList>
            </>
          )
        }}
      </ThemeContext.Consumer>
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
            <RetryButton type="button" onClick={this.getVideosData}>
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
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <TrendingHomeContainer>
                <SideBar />
                <TrendingMainContainer bgColor={bgColor} data-testid="trending">
                  {this.renderAll()}
                </TrendingMainContainer>
              </TrendingHomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
