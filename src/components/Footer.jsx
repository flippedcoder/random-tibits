import React from 'react'
import styled from 'styled-components'

import ExternalLink from '../common/ExternalLink'

export default function Footer() {
  return (
    <FooterFlex>
      <div>Flipped Coding &#169; 2020</div>
      <InnerFlex>
        <ExternalLink href="https://twitter.com/flippedcoding" title="Twitter" />
        <ExternalLink href="https://www.linkedin.com/in/milecia-mcgregor-4560b194" title="LinkedIn" />
        <ExternalLink href="https://www.producthunt.com/@awkward_programmer" title="Product Hunt" />
        <ExternalLink href="https://www.patreon.com/flippedcoding" title="Patreon" />
        <ExternalLink href="https://www.youtube.com/channel/UC_8hnT1ItE6PVK9ENzfdf7w" title="YouTube" />
      </InnerFlex>
    </FooterFlex>
  )
}

const FooterFlex = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`

const InnerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`
