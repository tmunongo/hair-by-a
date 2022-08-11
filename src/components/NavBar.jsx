import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
`

const ListItem = styled.li`
  list-style: none;
  :hover {
    // background: white;
    // border-radius 0.375rem;
    cursor: grab;
    padding: 4px;
    transition: all 500ms;
  }
`

const Logo = styled.div`
  align-items: center;
  //   background-color: #d5f2ef;
  border-bottom: 2px solid #d5f2ef;
  border-left: 2px solid #d5f2ef;
  border-top: 2px solid #d5f2ef;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  display: flex;
  font-family: cursive;
  font-size: 20px;
  height: 64px;
  justify-content: center;
  opacity: 0.8;
  width: 20vw;
`

const Navigation = styled.div`
  //   background-color: #cef5f0;
  border-bottom: 2px solid #d5f2ef;
  border-right: 2px solid #d5f2ef;
  border-top: 2px solid #d5f2ef;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  font-family: cursive;
  font-size: 20px;
  height: 64px;
  opacity: 0.8;
  width: 60vw;
`

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 18px;
`

const NavBar = () => {
  //   useEffect(() => {
  window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('#nav-bar')
    const navBody = document.querySelector('#no-border')
    const navBody2 = document.querySelector('#no-border-nav')
    if (window.scrollY > 0) {
      nav.classList.add('add-shadow')
      navBody.classList.add('no-border')
      navBody2.classList.add('no-border')
    } else {
      nav.classList.remove('add-shadow')
      navBody.classList.remove('no-border')
      navBody2.classList.remove('no-border')
    }
  })
  //   })

  return (
    <Container id="nav-bar">
      <Logo id="no-border">
        <p>Hair By A</p>
      </Logo>
      <Navigation id="no-border-nav">
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
