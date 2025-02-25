import { useState } from 'react'

const NewListingForm = ({addName}) => {
    const [newPerson, setNewPerson] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewPerson(event.target.value)
    }

    const handleNumChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addName(newPerson, newNumber);
        setNewPerson('')
        setNewNumber('')
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
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
        </div>

    )
}

export default NewListingForm