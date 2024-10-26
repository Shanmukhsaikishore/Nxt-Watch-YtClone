import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import {
  HomeContainer,
  MainContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
  PlayerContainer,
  TextContent,
  Title,
  TextContainer,
  ViewsContainer,
  ViewsContent,
  TimeContent,
  ButtonContainer,
  ButtonElement,
  LikeIcon,
  DisLikeIcon,
  SavedIcon,
  Seperator,
  BottomContainer,
  BottomTextContainer,
  BottomTitle,
  BottomPara,
  ChannelLogo,
  Description,
  DescriptionSm,
  SuccessContainer,
  Para,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
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

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDark,
            addToSaved,
            savedVideos,
            likedVideos,
            dislikedVideos,
            addToLiked,
            addToDisliked,
          } = value
          const textColor = isDark ? '#ffffff' : ' #1e293b'

          const paraColor = isDark ? '#94a3b8' : '#475569'

          const sepcolor = isDark ? '#94a3b8' : '#d7dfe9'

          const addSaved = () => {
            addToSaved(videoDetails)
          }

          const addLiked = () => {
            addToLiked(videoDetails)
          }

          const addDisliked = () => {
            addToDisliked(videoDetails)
          }

          const isLiked = likedVideos.find(each => each.id === videoDetails.id)

          const isDisLiked = dislikedVideos.find(
            each => each.id === videoDetails.id,
          )

          const isSaved = savedVideos.find(each => each.id === videoDetails.id)

          return (
            <SuccessContainer>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="100%"
                  width="100%"
                />
              </PlayerContainer>
              <TextContent>
                <Title textColor={textColor}>{title}</Title>
                <TextContainer>
                  <ViewsContainer>
                    <ViewsContent paracolor={paraColor}>
                      <Para>{viewCount} views</Para>
                    </ViewsContent>
                    <TimeContent paracolor={paraColor}>
                      <Para>{formatDistanceToNow(new Date(publishedAt))}</Para>
                    </TimeContent>
                  </ViewsContainer>
                  <ButtonContainer>
                    <ButtonElement
                      type="button"
                      paracolor={isLiked ? '#2563eb' : '#64748b'}
                      onClick={addLiked}
                    >
                      <LikeIcon paracolor={isLiked ? '#2563eb' : '#64748b'} />
                      Like
                    </ButtonElement>
                    <ButtonElement
                      type="button"
                      paracolor={isDisLiked ? '#2563eb' : '#64748b'}
                      onClick={addDisliked}
                    >
                      <DisLikeIcon
                        paracolor={isDisLiked ? '#2563eb' : '#64748b'}
                      />
                      Dislike
                    </ButtonElement>
                    <ButtonElement
                      type="button"
                      onClick={addSaved}
                      paracolor={isSaved ? '#2563eb' : '#64748b'}
                    >
                      <SavedIcon paracolor={isSaved ? '#2563eb' : '#64748b'} />
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonElement>
                  </ButtonContainer>
                </TextContainer>
                <Seperator sepcolor={sepcolor} />
                <BottomContainer>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <BottomTextContainer>
                    <BottomTitle textColor={textColor}>
                      {channel.name}
                    </BottomTitle>
                    <BottomPara paracolor={paraColor}>
                      {channel.subscriberCount} subscribers
                    </BottomPara>
                    <Description textColor={textColor}>
                      {description}
                    </Description>
                  </BottomTextContainer>
                </BottomContainer>
                <DescriptionSm textColor={textColor}>
                  {description}
                </DescriptionSm>
              </TextContent>
            </SuccessContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
              <HomeContainer>
                <SideBar />
                <MainContainer bgColor={bgColor} data-testid="videoItemDetails">
                  {this.renderAll()}
                </MainContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
