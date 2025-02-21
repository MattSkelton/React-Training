import { useState } from 'react'

const Stats = ({good, neutral, bad, total}) => { 

  if (total === 0)
  {
    return <p>No feedback given</p>
  }

  const Avg = () => {
    var ret = 0
    if (total > 0)
      ret = ((good - bad)/total)
    return ret
  }

  const Pos = () => {
    var ret = 0
    if (total > 0)
      ret = ((good / total) * 100).toFixed(4)
    return ret
  }
  return (
    <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {total}</p>
    <p>Average: {Avg()}</p>
    <p>Positive: {Pos()}%</p>
    </div>
  )
}
const Anecdote = ({selected, votes, anecdotes}) => {
  console.log ({selected})
  console.log ({votes})
  console.log ({anecdotes})

  return(
    <div>
      <h2>{anecdotes[selected]}</h2>
      <h3>This anecdote has: {votes[selected]} votes</h3>
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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleButtonClick = (ratingType) => {
    console.log(ratingType)
    if (ratingType === "good") {
      setGood((prev) => prev + 1);
    } else if (ratingType === "neutral") {
      setNeutral((prev) => prev + 1);
    } else if (ratingType === "bad") {
      setBad((prev) => prev + 1);

    setTotal((prev) => prev + 1);
  }};

  const handleAnecdoteClick = (type) => {
    if (type === "anecdote") {
      setSelected(Math.floor(Math.random() * 8))
    } else if (type === "vote") {
      const copy = {...votes}
      copy[selected] += 1
      setVotes(copy);
    }
  };
  return (
    <div>

    <Header text = 'Give Feedback'/>
    <Button onClick={() => handleButtonClick("good")} text = 'good'/>
    <Button onClick={() => handleButtonClick("neutral")} text = 'neutral'/>
    <Button onClick={() => handleButtonClick("bad")} text = 'bad'/>
    <Header text = 'Statistics'/>
    <Stats good = {good} neutral = {neutral} bad = {bad} total={total}/>
    <h1>Anecdote of the day</h1>
    <Anecdote selected = {selected} votes = {votes} anecdotes = {anecdotes}/>
    <Button onClick={() => handleAnecdoteClick("anecdote")} text = 'anecdote'/>
    <Button onClick={() => handleAnecdoteClick("vote")} text = 'vote'/>
    </div>
  )
}

export default App
