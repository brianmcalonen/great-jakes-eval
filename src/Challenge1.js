import styled from 'styled-components'
import a from './a.jpg'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description,
} from './Elements'

const Challenge1 = ({ clicked, componentId }) => {
    return (
        <ChallengeWrapper onClick={() => clicked(componentId)}>
            <ChallengeHeading>Challenge 1</ChallengeHeading>
            <Description>Style SingleDiv to look like the image. (Doesn't have to be pixel-perfect.)</Description>
            <div>
                <img src={a} width={100} height="auto" alt="" />
                <SingleDiv />
            </div>
        </ChallengeWrapper>
    )
}



const SingleDiv = styled.div`
    position: relative;
    width: 22px;
    height: 120px;
    top: -130px;
    left: 200px;
    background-color: white;
    border: 2px solid #111;
    transform: skew(-15deg);
    z-index: 200;

    &::before {
        content: "";
        position: absolute;
        width: 22px;
        height: 120px;
        background-color: white;
        border: 2px solid #111;
        transform: skew(30deg);
        top: -2px;
        left: 35px;
        z-index: 150;
    }

    &::after {
        content: "";
        position: absolute;
        width: 43px;
        height: 23px;
        background-color: white;
        border-top: 2px solid #111;
        border-bottom: 2px solid #111;
        transform: skew(0deg);
        top: 75px;
        left: 24px;
        z-index: 100;
    }
`

export default Challenge1