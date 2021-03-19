import {useState, useRef, useEffect} from 'react'

function useWordGame(){

    const STARTING_TIME = 60
    const [inputTextArea, setInputTextArea] = useState('')
    const [count, setCount] = useState (0)
    const [time, setTime] = useState(STARTING_TIME)
    const [start, setStart] = useState(false)
    const inputRef = useRef(null)
  
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
        setTime(STARTING_TIME)
        setInputTextArea('')
        setStart(true)
        inputRef.current.disabled = false
        inputRef.current.focus()
      }
    }
  
    useEffect(()=>{
      if(time && start){
      setTimeout(()=>{
        setTime(prev=> prev-1 )
      }
      ,1000) }else{
        handleStop()
      }
    },[time, start])

    return {inputRef, handleChange, inputTextArea, time, handleStart, handleStop, count, start}
}

export default useWordGame