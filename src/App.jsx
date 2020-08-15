import React from 'react'
import styled from 'styled-components'

import FactCard from './components/FactCard'
import Footer from './components/Footer'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <Main>
      <FlexContainer>
        <Header />
        <FactCard />
      </FlexContainer>
      <Footer />
    </Main>
  )
}

const FlexContainer = styled.div`
  flex: 1 0 auto;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default App
