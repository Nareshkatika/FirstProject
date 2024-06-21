import {useState} from 'react'

import "./App.css"

const App=()=>{
 
  const[count,setCount]=useState(0)
  const onClickSolution=()=>{
    setCount(prevState=>prevState+1)
  }
  return(
    <div className='BgImg'>
      <h1 className='headingEl1'>The Button has been clicked <span className='spanEl'>{count}</span> times</h1>
      <p className='paragraphEl1'>click the button to increase the count!</p>
        <div>
          <button onClick={onClickSolution} type='button'>Click Me!</button>
        </div>
    </div>
  )
}

export default App