import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (<div>No feedback given</div>)
    }
    else {
     const {good, neutral, bad} = props
      return (
        <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={good + neutral + bad} />
      <StatisticLine text="average" value ={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="positive" value ={(good / (good + neutral + bad) * 100) + ' %'} />
        </div>
      )
    }
    
}


const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text}: {props.value}</p> 
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <><div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
    </div>
      <h1>statistic</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    <div>
        
      </div></>
       
  )
}

export default App
