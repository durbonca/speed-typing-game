import {useEffect, useState} from 'react'

export function App(){

  const [inputTextArea, setInputTextArea] = useState('')
  const [count, setCount] = useState (0)
  const [time, setTime] = useState(10)
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

  function handleStart(){
      if(!start){
        setTime(60)
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
        name="input"
        onChange={handleChange} 
        value={ inputTextArea }
        />
      <h4>
          Time Remaining: {time}
      </h4>
      <button onClick={handleStart}>Start</button>
      <h1>Word Count: {count}</h1>
    </div>
  )
}