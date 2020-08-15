import React from 'react'
import styled from 'styled-components'

import FactCard from './components/FactCard'
import Footer from './components/Footer'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <>
      <FlexContainer>
        <Header />
        <FactCard />
      </FlexContainer>
      <Footer />
    </>
  )
}

const FlexContainer = styled.div`
  flex: 1 0 auto;
`

export default App
