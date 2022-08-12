import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  background: #cbe0da;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  width: 100%;
`

const Copyright = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
`

const Credit = styled.span`
  margin-top: 10px;
`

const Disclaimer = styled.span``

const FooterSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  padding: 8px;
  width: 50%;
  @media (max-width: 768px) {
    margin: 0;
    width: 90%;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 50%;
  @media (max-width: 768px) {
    align-items: center;
    width: 90%;
  }
`

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <LeftSection>
          <p>Get in Touch</p>
          <label for="name">Name: </label>
          <input type="text" name="name" />
          <label for="email">Email: </label>
          <input type="email" name="email" />
          <label for="message">Message: </label>
          <input type="text" name="message" style={{ height: '80px' }} />
          <input
            type="submit"
            name="submit"
            style={{ marginTop: '10px', width: '60px' }}
            onClick={() => console.log('submitted')}
          />
        </LeftSection>
        <RightSection>
          <p>Find Us</p>
          <p style={{ margin: '2px 0px' }}>
            <FaEnvelope size={20} style={{ paddingTop: '5px' }} /> :
            email@example.com
          </p>
          <p style={{ margin: '2px 0px' }}>
            <FaPhone size={20} style={{ paddingTop: '5px' }} /> : +263787654321
          </p>
          <div style={{ marginTop: '10px', width: '300px', height: '250px' }}>
            <StaticImage
              src="../../static/images/our-location.png"
              alt="out location map"
            />
          </div>
        </RightSection>
      </FooterSection>
      <Copyright>
        <Disclaimer>
          Credit for images used goes to the respective owners. Refer to GitHub
          Repo README.md for details.
        </Disclaimer>
        <Credit>
          Built and Designed by
          <a href="https://tawandamunongo.tech"> Tawanda Munongo</a>
        </Credit>
      </Copyright>
    </Container>
  )
}

export default Footer
