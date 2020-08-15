import React from 'react'
import styled from 'styled-components'

const ExternalLink = ({ href, title }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {title}
  </Link>
)

const Link = styled.a`
  color: #381600;
  text-decoration: none;

  &:visited {
    color: #1b4200;
  }
`

export default ExternalLink
