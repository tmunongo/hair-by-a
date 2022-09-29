import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../utils/formatDate'
import ButtonAsLink from './ButtonAsLink'

const Container = styled.div`
  border-radius: 30px;
  background: #e6ebe9;
  box-shadow: 2px 2px 10px #181818;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 16px;
  width: 20%;
  :hover {
    border-radius: 30px;
    background: #e6ebe9;
    box-shadow: inset 10px 10px 25px #d6dbd9, inset -10px -10px 25px #f6fbf9;
    transition: all 300ms ease-in-out 300ms;
    // transition-property: box-shadow;
  }
`

const Cover = styled.img`
  max-height: auto;
  max-width: 100%;
  hover: {
    translate: scale(1.1);
  }
`

const PostPreview = ({ id, slug, createdAt, title, cover, fName, lName }) => {
  return (
    <Container>
      <p>{formatDate(createdAt)}</p>
      <p>
        By {fName} {lName}
      </p>
      <h3>{title}</h3>
      {/* <GatsbyImage alt={title} image={cover} /> */}
      <div>
        <Cover src={cover} alt={title} />
      </div>
      <ButtonAsLink location={`/blog/${slug}`}>Read More</ButtonAsLink>
    </Container>
  )
}

export default PostPreview
