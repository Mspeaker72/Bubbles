import { useState } from 'react'
import './App.css'
import Bubble from './components/bubble'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  // const counter = () => {setCount((prevCount)=>prevCount+1)}
  // just for notation

  return (
    <>
    <Header></Header>
     <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
     <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
    <Bubble initial_text={"info policy"} text={"welcome to company x..."} color={"blue"} className={"bubble"}></Bubble>
    <Footer></Footer>
    </>
  )
}

export default App
