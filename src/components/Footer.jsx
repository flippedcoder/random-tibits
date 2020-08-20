import React from 'react'
import styled from 'styled-components'

import ExternalLink from '../common/ExternalLink'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterFlex>
        <ExternalLink
          href="https://flippedcoding.com"
          title="Flipped Coding &#169; 2020"
        />
        <InnerFlex>
          <ExternalLink
            href="https://twitter.com/flippedcoding"
            title="Twitter"
          />
          <ExternalLink
            href="https://www.linkedin.com/in/milecia-mcgregor-4560b194"
            title="LinkedIn"
          />
          <ExternalLink
            href="https://www.producthunt.com/@awkward_programmer"
            title="Product Hunt"
          />
          <ExternalLink
            href="https://www.patreon.com/flippedcoding"
            title="Patreon"
          />
          <ExternalLink
            href="https://www.youtube.com/channel/UC_8hnT1ItE6PVK9ENzfdf7w"
            title="YouTube"
          />
        </InnerFlex>
      </FooterFlex>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  flex-shrink: 0;
`

const FooterFlex = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`

const InnerFlex = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    flex-grow: unset;

    & > a {
      padding: 6px;
    }
  }
`
