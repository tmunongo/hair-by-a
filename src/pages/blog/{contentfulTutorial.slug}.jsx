import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Wave from '../../../static/svg/wave-haikei.svg'
import NavBar from '../../components/NavBar'

const Body = styled.div`
  margin-left: 30%;
  padding-top: 140px;
  min-width: 100%;
`

const Content = styled.div`
  margin-top: 100px;
`

const Heading = styled.h1`
  font-size: 3em;
  left: 30%;
  position: absolute;
  z-index: 15;
`

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 100%;
`

const WaveBackground = styled.div`
  background-image: url(${Wave});
  position: absolute;
  height: 40%;
  top: 0;
  width: 100%;
  z-index: 10;
`

const PostPage = ({ data }) => {
  // console.log(data)
  const post = data.contentfulTutorial
  return (
    <Main>
      <NavBar />
      <WaveBackground></WaveBackground>
      <Body>
        <Heading>{post.title}</Heading>
        <Content>
          <p>
            {post.author.firstName} {post.author.lastName}
          </p>
        </Content>
      </Body>
    </Main>
  )
}

export const data = graphql`
  query tutorialQuery($slug: String) {
    contentfulTutorial(slug: { eq: $slug }) {
      id
      createdAt
      coverImage {
        url
      }
      slug
      title
      textBody {
        textBody
      }
      author {
        firstName
        lastName
        summary {
          summary
        }
      }
    }
  }
`

export default PostPage
