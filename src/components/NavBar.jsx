import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
`

const ListItem = styled.li`
  list-style: none;
`

const Logo = styled.div`
  align-items: center;
  background-color: pink;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  height: 64px;
  width: 192px;
`

const Navigation = styled.div`
  background-color: pink;
  border-radius: 2rem;
  height: 64px;
  width: 480px;
`

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 22px;
`

const NavBar = () => {
  return (
    <Container>
      <Logo>
        <p>Hair By A</p>
      </Logo>
      <Navigation>
        <NavList>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Shop</ListItem>
        </NavList>
      </Navigation>
    </Container>
  )
}

export default NavBar
