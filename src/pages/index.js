import * as React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const IndexPage = () => {
  return (
    <Main>
      <NavBar />
      <div>Hello</div>
    </Main>
  )
}

export default IndexPage

export const Head = () => <title>Hair By A</title>
