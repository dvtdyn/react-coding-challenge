import React from 'react'
import styled from 'styled-components/macro'

export default function Book({ book }) {
  const { title, authors } = book
  console.log(authors)

  return (
    <BookContainer>
      <H2>{title}</H2>
      {authors.map(({ name, birth_year: birthYear, death_year: deathYear }) => (
        <AuthorContainer>
          <div>
            <p>Author</p>
            <p>{name}</p>
          </div>
          <div>
            <p>Year of Birth</p>
            <p>{birthYear}</p>
          </div>
          <div>
            <p>Year of Death</p>
            <p>{deathYear}</p>
          </div>
        </AuthorContainer>
      ))}
    </BookContainer>
  )
}

const BookContainer = styled.section`
  background: var(--uptainGreen);
  color: white;
  padding: 20px;
  border-radius: 8px;
`

const H2 = styled.h2`
  font-size: 16px;
`
const AuthorContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 120px 120px;
`
