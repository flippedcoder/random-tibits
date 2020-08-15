import React, { useState } from 'react'
import styled from 'styled-components'

import tidbitData from '../data/tidbits.json'

export default function FactCard() {
  const tidbitArray = [...tidbitData]
  const [currIndex, setCurrIndex] = useState(0)

  const showNextTidbit = () => {
    if (currIndex + 1 === tidbitArray.length) {
      setCurrIndex(0)
    } else {
      setCurrIndex(currIndex + 1)
    }
  }

  return (
    <Container>
      <h2>{tidbitArray[currIndex].category}</h2>
      <Text>{tidbitArray[currIndex].fact}</Text>
      <Button onClick={showNextTidbit}>Get new tidbit</Button>
    </Container>
  )
}

const Button = styled.div`
  background-color: #0076b9;
  border-radius: 30px;
  color: #fff;
  font-size: 18px;
  margin: 24px auto;
  padding: 12px;
  text-align: center;
  width: 170px;

  &:hover {
    cursor: pointer;
  }
`
const Container = styled.div`
  border: 5px solid;
  margin: 24px auto;
  padding: 0 24px;
  width: 80%;
`

const Text = styled.div`
  font-size: 20px;
`
