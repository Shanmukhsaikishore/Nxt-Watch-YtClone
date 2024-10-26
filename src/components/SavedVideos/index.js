import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import TrendingVideoCard from '../TrendingVideoCard'

import {
  HomeContainer,
  MainContainer,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
  Banner,
  SavedHeading,
  VideosList,
  IconContainer,
  SavedIcon,
} from './styleComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

      const noVideosView = () => {
        const textColor = isDark ? '#ffffff' : '#1e293b'

        const paraColor = isDark ? '#7e858e' : '#475569'

        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading textColor={textColor}>
              No Saved Videos Found
            </FailureHeading>
            <FailurePara paraColor={paraColor}>
              You can save your videos while watching them.
            </FailurePara>
          </FailureContainer>
        )
      }

      const savedVideosView = () => {
        const bannerBg = isDark ? '#181818' : '#f1f1f1'

        const iconBg = isDark ? '#0f0f0f' : '#e2e8f0'

        const textColor = isDark ? '#ffffff' : '#1e293b'

        return (
          <>
            <Banner bannerBg={bannerBg}>
              <IconContainer iconBg={iconBg}>
                <SavedIcon />
              </IconContainer>
              <SavedHeading textColor={textColor}>Saved Videos</SavedHeading>
            </Banner>
            <VideosList>
              {savedVideos.map(each => (
                <TrendingVideoCard key={each.id} videoDetails={each} />
              ))}
            </VideosList>
          </>
        )
      }

      return (
        <>
          <Header />
          <HomeContainer>
            <SideBar />
            <MainContainer bgColor={bgColor} data-testid="savedVideos">
              {savedVideos.length === 0 ? noVideosView() : savedVideosView()}
            </MainContainer>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
