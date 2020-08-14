import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderFlex>
      <h2>Random Tidbits</h2>
      <Link href="https://www.patreon.com/flippedcoding?fan_landing=true" target="_blank">
        Patreon
      </Link>
    </HeaderFlex>
  )
}

const HeaderFlex = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  background-color: #FA8676;
  border-radius: 12px;
  color: #333333;
  font-size: 20px;
  padding: 12px;
  text-decoration: none;

  &:hover {
    padding: 16px;
  }
  &:visited {
    color: #333333;
  }
`
