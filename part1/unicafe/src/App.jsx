import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (<div>No feedback given</div>
    )
    }
    else {
    const {good, neutral, bad} = props
      return (
        <div>
        <p>good {good} </p>
        <p>neutral {neutral} </p>
        <p>bad {bad} </p>
        <p>all {good + neutral + bad} </p>
        <p>average {(good - bad) / (good + neutral + bad)} </p>
        <p>positive {good / (good + neutral + bad) * 100} %</p>
        </div>
      )
    }
    
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
  setGood(good + 1)
}
  const handleNeutral = () => {
  setNeutral(neutral + 1)
}
  const handleBad = () => {
  setBad(bad + 1)
}

  return (
    <><div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </div>
      <h1>statistic</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    <div>
        
      </div></>
       
  )
}

export default App
