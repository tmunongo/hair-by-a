import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import styled from 'styled-components'

const BurgerIcon = styled.div`
  cursor: grab;
  display: none;
  padding-top: 15px;
  @media (max-width: 980px) {
    display: flex;
    padding: 15px 20px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 10px;
  @media (max-width: 980px) {
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100vw;
  }
`

const DropList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const DropListItem = styled.li`
  font-size: 20px;
  line-height: 60px;
  list-style: none;
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
  // border-bottom: 2px solid #d5f2ef;
  // border-left: 2px solid #d5f2ef;
  // border-top: 2px solid #d5f2ef;
  // border-top-left-radius: 2rem;
  // border-bottom-left-radius: 2rem;
  display: flex;
  font-family: 'Nova Script', cursive;
  font-size: 24px;
  height: 64px;
  justify-content: center;
  opacity: 0.8;
  width: 130px;
  @media (max-width: 980px) {
    border: none;
  }
`

const MenuHidden = styled.div`
  background: #cbe0da;
  height: calc(100vh - 60px);
  left: -100vw;
  position: absolute;
  top: 0px;
  transition: all 0.5ms;
  width: 100vw;
  @media (min-width: 980px) {
    display: none;
  }
`

const MenuVisible = styled.div`
  align-items: center;
  background-color: #cbe0da;
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  left: 0px;
  position: absolute;
  top: 60px;
  transition: all 0.5ms;
  width: 100vw;
  z-index: 999;
  @media (min-width: 980px) {
    display: none;
  }
`

const Navigation = styled.div`
  //   background-color: #cef5f0;
  // border-bottom: 2px solid #d5f2ef;
  // border-right: 2px solid #d5f2ef;
  // border-top: 2px solid #d5f2ef;
  // border-top-right-radius: 2rem;
  // border-bottom-right-radius: 2rem;
  font-family: 'Nova Script', cursive;
  font-size: 20px;
  height: 64px;
  opacity: 0.8;
  width: 60vw;
  z-index: 1000;
  @media (max-width: 980px) {
    border: none;
    display: none;
  }
`

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 18px;
`

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
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
  })

  return (
    <Container id="nav-bar">
      <Logo id="no-border">
        <p>Hair By A</p>
      </Logo>
      <BurgerIcon>
        {!menu ? (
          <AiOutlineMenu size={30} onClick={() => setMenu(true)} />
        ) : (
          <AiOutlineClose size={30} onClick={() => setMenu(false)} />
        )}
      </BurgerIcon>
      <Navigation id="no-border-nav">
        <NavList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>
            <Link to="/blog">Blog</Link>
          </ListItem>
          <ListItem>Shop</ListItem>
        </NavList>
      </Navigation>
      {menu ? (
        <MenuVisible>
          <DropList>
            <DropListItem>Home</DropListItem>
            <DropListItem>About Us</DropListItem>
            <DropListItem>Contact Us</DropListItem>
            <DropListItem>Shop</DropListItem>
          </DropList>
        </MenuVisible>
      ) : (
        <MenuHidden></MenuHidden>
      )}
    </Container>
  )
}

export default NavBar
