import { useState , useEffect} from 'react'
import phonebookServices from './services/phonebookServices'
import Listing from './components/listing'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  phonebookServices
  .getAll()
  .then(initialPhonebook => {
    setPersons(initialPhonebook)
  })

  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newPerson);
    if(nameExists) {
      alert(`${newPerson} is already in the phonebook`);
      return;
    }

    const nameObject = {
      name: newPerson,
      number: newNumber,
      id: String(persons.length + 1),
    }
    
    phonebookServices
    .create(nameObject)
    .then(returnedObject => {
      console.log({returnedObject})
      setPersons(persons.concat(returnedObject))
      setNewPerson('')
      setNewNumber('')
    })

  }

  const deleteListing = ({id}) => {  
    let updatedArray = persons
    console.log({id})
    const index = updatedArray.findIndex(person => person.id === id)

    if (index === -1) {
      alert(`${newPerson} is not in the phonebook`);
      return;
    }

    updatedArray = updatedArray.splice(0, index)
  
    phonebookServices
    .deleteListing(id)
    .then(returnedObject => {
      setPersons(updatedArray)
    })
  }
  
  const listingsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onChange={handleFilterChange} />
      
      <h2>Add a new listing</h2>

      <form onSubmit={addName}>
        <div>
          name: 
          <input   
            value={newPerson}
            onChange={handleNameChange} 
          />
        <br/>
        <br/>
          number:
          <input   
            value={newNumber}
            onChange={handleNumChange} 
          />
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {listingsToShow.map(person => 
          <Listing key={person.id} id={person.id} name={person.name} number={person.number} onClick={deleteListing}/>
        )}
      </ul>
      ...
    </div>
    
  )
}
//      <div>debug: {newPerson}</div>
export default App
