
const Header = (props) => {

  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
      props.parts.map(element => (
        <p key={element.name}>{element.name} {element.exercises}</p>
      ))
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, element) => sum + element.exercises, 0)  
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App