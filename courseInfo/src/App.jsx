
const Header = (props) => {

  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {

  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Part = (props) => {

  return (
    <div>
      <Header name = {props.name}/>
      <Content part = {props.part} exercise = {props.exercise}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part name = {course} part = {part1} exercise = {exercises1}/>
      <Part name = {course} part = {part2} exercise = {exercises2}/>
      <Part name = {course} part = {part3} exercise = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App