import React from 'react'
import styled from 'styled-components'

const CenterWrapper = ({ children }) => {
  const ParentContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  `

  const ChildContainer = styled.div`
    position: relative;
    padding: 0;
    text-align: center;
    max-width: 80%;
  `

  return (
    <ParentContainer>
      <ChildContainer>{children}</ChildContainer>
    </ParentContainer>
  )
}

export default CenterWrapper
