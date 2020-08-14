import React, { useState } from 'react'
import styled from 'styled-components'

import tidbitData from '../data/tidbits.json'

export default function FactCard() {
  const tidbitArray = [...tidbitData]
  const [currIndex, setCurrIndex] = useState(0)

  const showNextTidbit = () => {
    if (currIndex + 1 > tidbitArray.length) {
      setCurrIndex(0)
    } else {
      setCurrIndex(currIndex + 1)
    }
  }
  
  return (
    <Container>
        <h2>{tidbitArray[currIndex].category}</h2>
        <Box>
          {tidbitArray[currIndex].fact}
        </Box>
        <Button onClick={showNextTidbit}>Click here for a new tidbit</Button>
    </Container>
  )
}

const Box = styled.div`
  height: 0.5vh;
  margin: 0 auto;
`
const Button = styled.div`
  text-align: center;
`
const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`
