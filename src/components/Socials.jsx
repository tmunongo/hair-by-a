import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  left: 40px;
  margin-left: 20px;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`

const Line = styled.div`
  background: black;
  height: 15vh;
  width: 1px;
`

const Socials = () => {
  return (
    <Container>
      <FaTiktok size={25} style={{ cursor: 'grab', margin: '10px 0px' }} />
      <FaFacebook size={25} style={{ cursor: 'grab', margin: '10px 0px' }} />
      <FaTwitter size={25} style={{ cursor: 'grab', margin: '10px 0px' }} />
      <FaInstagram size={25} style={{ cursor: 'grab', margin: '10px 0px' }} />
      <Line></Line>
    </Container>
  )
}

export default Socials
