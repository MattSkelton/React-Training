import { useState } from 'react'

const Stats = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {all}</p>
    <p>Average: {avg}</p>
    <p>Positive: {pos}</p>
    </div>
  )
}

const Button = (props) => { 
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Header = (props) => {
  console.log(props.text)
  return (
    <h1>{props.text}</h1>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleButtonClick = (ratingType) => {
    if (ratingType === "good") {
      setGood((prev) => prev + 1);
    } else if (ratingType === "neutral") {
      setNeutral((prev) => prev + 1);
    } else if (ratingType === "bad") {
      setBad((prev) => prev + 1);
    }

    setTotal((prev) => prev + 1);
  };
  return (
    <div>

    <Header text = 'Give Feedback'/>
    <Button onClick={() => handleButtonClick("good")} text = 'good'/>
    <Button onClick={() => handleButtonClick("neutral")} text = 'neutral'/>
    <Button onClick={() => handleButtonClick("bad")} text = 'bad'/>
    <Header text = 'Statistics'/>


    </div>
  )
}

export default App
