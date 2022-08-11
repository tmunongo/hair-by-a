import { StaticImage } from 'gatsby-plugin-image'
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

const Image = styled.div`
  height: auto;
  width: 40%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 24px;
  width: 50%;
`

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Quote = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10vw;
`

const SubSection1 = styled.div`
  background: whitesmoke;

  border-radius: 0.375rem;
  display: flex;
  margin-top: 10px;
  padding: 8px;
`

const SubSection2 = styled.div``

const SmallText = styled.span`
  font-size: 16px;
`

const Sponsors = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
      <Section2>
        <SubSection1>
          <Info style={{ textAlign: 'left' }}>
            <h2>World Class Staff</h2>
            <h4>
              Our committed staff will ensure that you walk out looking like the
              best version of yourself. With over 10 years of experience in
              fashion and retail, you can rest assured that we know what looks
              good.
            </h4>
          </Info>
          <Image>
            <StaticImage
              src="../../static/images/our-staff.jpg"
              alt="our staff"
            />
          </Image>
        </SubSection1>
        <SubSection1>
          <Image>
            <StaticImage
              src="../../static/images/hair-mood.jpg"
              alt="hair mood"
            />
          </Image>
          <Info style={{ textAlign: 'right' }}>
            <h2>Solutions</h2>
            <Quote>
              “So you don’t want to change the color and you don’t want to go
              shorter and you don’t want extensions but you’re ready for a whole
              new look… um okay.”
            </Quote>
            <strong>Anonymous</strong>
            <h4>We've got just the thing for you.</h4>
          </Info>
        </SubSection1>
        <SubSection1>
          <Info style={{ textAlign: 'left' }}>
            <h2>Variety is the Spice of Life</h2>
            <h4>
              We've got something to match every occassion, from Sunday lunch to
              red carpet and the Met Gala.
            </h4>
            <Quote>
              “Hairdressers are a wonderful breed. You work one on one with
              another human being, and the object is to make them feel so much
              better, and to look at themselves with a twinkle in their eye.”
            </Quote>
            <strong>Vidal Sassoon</strong>
          </Info>
          <Image>
            <StaticImage
              src="../../static/images/on-shelf.jpg"
              alt="on shelf"
            />
          </Image>
        </SubSection1>
      </Section2>
      <Sponsors></Sponsors>
    </Main>
  )
}

export default IndexPage

export const Head = () => <title>Hair By A</title>
