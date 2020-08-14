import React from 'react'
import styled from 'styled-components'

const ExternalLink = ({ href, title }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {title}
  </Link>
)

const Link = styled.a`
  text-decoration: none;
`

export default ExternalLink
