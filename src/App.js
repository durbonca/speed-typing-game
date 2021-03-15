/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

import {useState} from 'react'

export function App(){

  const [inputTextArea, setInputTextArea] = useState()

  function handleChange(event){
    let inputValue = event.target.value
    setInputTextArea( inputValue )
  }

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
          Time Remaining: ???
      </h4>
      <button>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  )
}