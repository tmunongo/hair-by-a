import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 20px;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
`

const Line = styled.div`
  background: black;
  width: 1px;
`

const Socials = () => {
  return (
    <Container>
      <FaTiktok size={25} />
      <FaFacebook size={25} />
      <FaTwitter size={25} />
      <FaInstagram size={25} />
      <Line></Line>
    </Container>
  )
}

export default Socials
