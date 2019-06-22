import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

//
// ${props => props.height ? props.height : '200px'}
const PicOfMe = (width, height, extraStyling) => {
  const ImageContainer = styled.div`
    width: 25vw;
    height: 25vw;
    display: inline-block;
  `

  // if only I had added typescript by now
  const addedStyle = extraStyling instanceof Map ? extraStyling : {}

  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <ImageContainer width={width} height={height} style={addedStyle}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ borderRadius: '50%', border: '0.7vw solid #FFF' }}
          />
        </ImageContainer>
      )}
    />
  )
}

export default PicOfMe
