import styled, { keyframes } from 'styled-components'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge2 = ({ clicked, componentId }) => {
    return (
        <ChallengeWrapper onClick={() => clicked(componentId)}>
            <ChallengeHeading>Challenge 2</ChallengeHeading>
            <Description>Make the Moon orbit the Earth.</Description>
            <div>
                <Earth/>
                <Moon/>
            </div>
        </ChallengeWrapper>
    )
}

const rotateMoon = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateEarth = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const orbitMoon = keyframes`
    100% { 
      transform: rotate(-360deg); 
    }
`;

const Moon = styled.div`
  background: #E6DADA;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 30px;
  width: 30px;
  border-radius: 50%;
  animation: ${rotateMoon} 3s linear infinite;
  animation: ${orbitMoon} 3s linear infinite;
  transform-origin: 500% center;       
  position:relative; 
  top: -90px;
  left: -50px;
`

const Earth = styled.div`
  background: #134E5E;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #71B280, #134E5E);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #71B280, #134E5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 150px;
  width: 150px;
  border-radius: 50%;
  animation: ${rotateEarth} 3s linear infinite;
`

export default Challenge2