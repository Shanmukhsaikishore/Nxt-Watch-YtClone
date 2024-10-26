import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  LinkElement,
  VideoCardContainer,
  VideoImage,
  TextContainer,
  Title,
  VideoPara,
  VideoContent,
  ViewsContainer,
  ViewsContent,
  ChannelLogo,
  TextDetails,
  TimePara,
  Para,
} from './styleComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#ffffff' : ' #1e293b'

        const paraColor = isDark ? '#94a3b8' : '#475569'

        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoCardContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <TextContainer>
                  <Title textColor={textColor}>{title}</Title>
                  <TextDetails>
                    <VideoPara paraColor={paraColor}>
                      <Para>{channel.name}</Para>
                    </VideoPara>
                    <ViewsContainer>
                      <ViewsContent paraColor={paraColor}>
                        <Para>{viewCount} views</Para>
                      </ViewsContent>
                      <TimePara paraColor={paraColor}>
                        <Para>
                          {formatDistanceToNow(new Date(publishedAt))}
                        </Para>
                      </TimePara>
                    </ViewsContainer>
                  </TextDetails>
                </TextContainer>
              </VideoContent>
            </VideoCardContainer>
          </LinkElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
