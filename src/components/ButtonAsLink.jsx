import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const ButtonText = styled.span`
  font-weight: bold;
`

const Container = styled.div`
  align-items: center;
  background: transparent;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  height: 48px;
  margin: 10px;
  width: 120px;
  :hover {
    background: #d5f2ef;
    cursor: grab;
    opacity: 0.8;
    transform: scale(1.1, 1.1);
    transition: all 300ms ease-in-out 300ms;
  }
`

const ButtonAsLink = ({ location, children }) => {
  return (
    <Container>
      <Link to={location}>
        <ButtonText>{children}</ButtonText>
      </Link>
    </Container>
  )
}

export default ButtonAsLink
