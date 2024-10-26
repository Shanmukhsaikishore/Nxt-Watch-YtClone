import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Image = styled.img`
  height: 300px;
  width: 400px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  margin-bottom: 0px;
  text-align: center;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: #000000;
  text-align: center;
`
