import ThemeContext from '../../context/ThemeContext'

import {
  LinkElement,
  VideoContainer,
  VideoImage,
  VideoTitle,
  VideoPara,
} from './styleComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {title, id, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const textColor = isDark ? '#ffffff' : ' #1e293b'

        const paraColor = isDark ? '#94a3b8' : '#475569'

        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoTitle textColor={textColor}>{title}</VideoTitle>
              <VideoPara paraColor={paraColor}>
                {viewCount} Watching Worldwide
              </VideoPara>
            </VideoContainer>
          </LinkElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
