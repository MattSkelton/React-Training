const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Friends = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const name = 'Zelda'
  const age = 3
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Matt' age = {12 + 12}/>
      <Hello name='Clark' age = {age}/>
      <Hello name= {name} age = {age}/>

      <Friends/>
      <p>
        {name} is {age} years old
      </p>
    </div>
  )
}

export default App