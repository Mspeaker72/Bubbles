import { useState } from 'react'
import './App.css'
import Bubble from './components/bubble'

function App() {
  const [count, setCount] = useState(0)

  // const counter = () => {setCount((prevCount)=>prevCount+1)}
  // just for notation

  return (
    <>
     <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
     <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
    <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
    </>
  )
}

export default App
