import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Frame = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
`

export const ChallengeWrapper = styled.div`
  width: 400px;
  padding: 5px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #dedede;
    cursor: pointer;
  }
`

export const Description = styled.div`
  margin-bottom: 25px;
`

export const Title = styled.h1`
  
`

export const ChallengeHeading = styled.h2`
  text-align: center;
`