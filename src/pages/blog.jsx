import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import PostPreview from '../components/PostPreview'

const Body = styled.div`
  background-color: #cbe0da;
  padding-top: 100px;
  padding-left: 15%;
  min-height: 600px;
  width: 100vw;
`

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Posts = styled.div`
  display: flex;
`

const Blog = ({ data }) => {
  return (
    <Main>
      <NavBar />
      <Body>
        <h2>Get to Know Our Products</h2>
        <h3>... and how to use them!</h3>
        <Posts>
          {data.allContentfulTutorial.nodes.map((item, index) => {
            return (
              <PostPreview
                key={index}
                id={item.id}
                slug={item.slug}
                createdAt={item.createdAt}
                title={item.title}
                cover={item.coverImage.url}
                fName={item.author.firstName}
                lName={item.author.lastName}
              />
            )
          })}
        </Posts>
      </Body>
    </Main>
  )
}

export const data = graphql`
  query tutorialsQuery {
    allContentfulTutorial {
      nodes {
        id
        slug
        title
        createdAt
        coverImage {
          url
        }
        author {
          firstName
          lastName
        }
      }
    }
  }
`

export default Blog
