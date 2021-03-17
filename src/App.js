import {useEffect, useState} from 'react'

export function App(){

  const STARTING_TIME = 60
  const [inputTextArea, setInputTextArea] = useState('')
  const [count, setCount] = useState (0)
  const [time, setTime] = useState(STARTING_TIME)
  const [start, setStart] = useState(false)

  function handleChange(event){
    const inputValue = event.target.value
    setInputTextArea( inputValue )
  }

  function countWords(inputTextArea){
    if(inputTextArea.match(/\S+/g)){
      let numberOfWords = inputTextArea.match(/\S+/g).length
      setCount(numberOfWords)
    }else(
      setCount(0)
    )
  }

  function handleStop(){
    if(start){
      countWords(inputTextArea)
    }
      setStart(false)
  }

  function handleStart(){
      if(!start){
        document.getElementById('input').focus()
        setTime(STARTING_TIME)
        setInputTextArea('')
        setStart(true)
      }
  }

  useEffect(()=>{
    if(time && start){
    setTimeout(()=>{
      setTime(prev=> prev-1 )
    }
    ,1000) }else{
      setStart(false)
      countWords(inputTextArea)
    }
  },[time, start])

  return(
    <div>
      <h1>
          How Fast Do You Type?
      </h1>
      <textarea 
        id="input"
        name="input"
        onChange={handleChange} 
        value={ inputTextArea }
        />
      <h4>
          Time Remaining: {time}
      </h4>
      <div style={{display: 'flex'}}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <h1>Word Count: {count}</h1>
    </div>
  )
}