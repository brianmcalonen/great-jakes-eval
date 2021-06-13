import React from 'react'

import Challenge1 from './Challenge1'
import Challenge2 from './Challenge2'
import Challenge3 from './Challenge3'
import Challenge4 from './Challenge4'
import {
    AppWrapper,
    Frame,
    Title
}                 from './Elements'

function App() {
    const [numClicks, setNumClicks] = React.useState({ 
        c1: 0,
        c2: 0,
        c3: 0,
        total: 0
      })

    const handleClick = (c) => {
        const newClicks = numClicks

        newClicks[c] += 1

        newClicks.total += 1

        setNumClicks({...numClicks, newClicks})
    }  



    return (
        <AppWrapper>
            <Title>Front-End Dev Evaluation</Title>
            <Frame>
                <Challenge1 clicked={handleClick} componentId={"c1"} />
                <Challenge2 clicked={handleClick} componentId={"c2"}  />
                <Challenge3 clicked={handleClick} componentId={"c3"}  />
                <Challenge4 numClicks={numClicks} />
            </Frame>
        </AppWrapper>
    );
}

export default App;
