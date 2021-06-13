import React from 'react'

import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

const Challenge3 = ({ clicked, componentId }) => {
        const [windowSize, setWindowSize] = React.useState({ 
          height: window.innerHeight,
          width: window.innerWidth
        })

        React.useEffect(() => {
          let timeoutID; 

          const handleWindowResize = () => {
            if(timeoutID) {
              clearTimeout(timeoutID);
            }

            // set timeoutID every tenth of a second to throttle back 
            // the number of times setWindowSize is called
            timeoutID = setTimeout(() => {
              setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
              });
            }, 100);
          }
          window.addEventListener('resize', handleWindowResize)

          // on component destroy remove the event listener to prevent memory leaks
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          }

        }, [])
    
    return (
        <ChallengeWrapper onClick={() => clicked(componentId)}>
            <ChallengeHeading>Challenge 3</ChallengeHeading>
            <Description>Report the window dimensions. This should update when the window size is changed.</Description>
            <div>
                <div>Width: {windowSize.width}px</div>
                <div>Height: {windowSize.height}px</div>
            </div>
        </ChallengeWrapper>
    )
}

export default Challenge3