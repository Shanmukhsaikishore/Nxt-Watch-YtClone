import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  LinkElement,
  VideoCardContainer,
  VideoImage,
  VideoContent,
  TextContainer,
  Title,
  VideoPara,
  ChannelLogo,
  ViewsContainer,
  ViewsContent,
  TimeContent,
  Para,
} from './styleComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const textColor = isDark ? '#ffffff' : ' #1e293b'
        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoCardContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <TextContainer>
                  <Title textColor={textColor}>{title}</Title>
                  <VideoPara>{channel.name}</VideoPara>
                  <ViewsContainer>
                    <ViewsContent>
                      <Para>{viewCount} views</Para>
                    </ViewsContent>
                    <TimeContent>
                      <Para>{formatDistanceToNow(new Date(publishedAt))}</Para>
                    </TimeContent>
                  </ViewsContainer>
                </TextContainer>
              </VideoContent>
            </VideoCardContainer>
          </LinkElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
