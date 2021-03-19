import useWordGame from './hooks/useWordGame'

export function App(){

  const {inputRef, handleChange, inputTextArea, time, handleStart, handleStop, count, start} = useWordGame()

  return(
    <div>
      <h1>
          How Fast Do You Type?
      </h1>
      <textarea 
        style={{caretColor:'red'}}
        ref={inputRef}
        disabled={!start}
        name="input"
        onChange={handleChange}
        value={ inputTextArea }
        />
      <h4>
          Time Remaining: {time}
      </h4>
      <div style={{display: 'flex'}}>
        <button onClick={handleStart} disabled={start}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <h1>Word Count: {count}</h1>
    </div>
  )
}