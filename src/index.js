import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Conditional rendering

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
        The App is used by Pressing button
      </div>
    )
  }
  return(
    <div>
      Button press History:{props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(clicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(clicks.concat('R'))
    setRight(right + 1)
  }
  return(
    <div>
      {left}
      <button onClick = {handleLeftClick}>Left</button>
      <button onClick = {handleRightClick}>Right</button>
      {right}
      <History allClicks = {clicks} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


/*
const App = () =>{
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)

  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

*/
