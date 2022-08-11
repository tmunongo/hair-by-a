import * as React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import NavBar from '../components/NavBar'
import '../styles/index.css'

const HeroText = styled.h1`
  font-size: 48px;
  margin-left: 10vw;
`

const Hero = styled.div`
  align-items: center;
  background: linear-gradient(to top, gold, white);
  background-size: cover;
  display: flex;
  justify-content: start;
  min-height: 600px;
  padding: 8px;
  width: 100vw;
`

const HeroSubText = styled.h3`
  margin-left: 10vw;
  text-transform: capitalize;
`

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const SmallText = styled.span`
  font-size: 16px;
`

const IndexPage = () => {
  return (
    <Main>
      <NavBar />
      <Hero
        style={{
          backgroundImage: `url(images/hero-banner.jpg), linear-gradient(to top, (gold, white))`,
          backgroundImage: `url(images/hero-banner.jpg)`,
        }}
      >
        <div>
          <HeroText>
            Hair By A <SmallText>est. 20xx</SmallText>
          </HeroText>
          <HeroSubText>Let your hair do the talking</HeroSubText>
          <Button text="Learn More" />
        </div>
      </Hero>
    </Main>
  )
}

export default IndexPage

export const Head = () => <title>Hair By A</title>
