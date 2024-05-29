import { useState } from 'react'
import './App.css'
import Bubble from './components/bubble'
import Footer from './components/Footer'
import Header from './components/Header'
import getInfo from './assets/info'

function App() {
  // const [count, setCount] = useState(0)
  // const counter = () => {setCount((prevCount)=>prevCount+1)}
  // just for notation

  const info = getInfo()

  if(info.length>12){
    return (<p>Invalid Request</p>);
  }

  return (
    <>
    <Header></Header>
    <div className='container'>
    {info.map((information)=><Bubble initial_text={information.term} 
    text={information.definition} color={"blue"} 
    className={"bubble"}></Bubble>)}
    </div>
    
    <Footer></Footer>
    </>
  )
}

export default App
