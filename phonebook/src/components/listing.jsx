const Listing = ({id, name, number, onClick}) => {
    return (
      <div>
        <li>{name}: {number}</li>
        <button id="delete" onClick={() => onClick({id})}>delete</button>
      </div>
    )
  }
export default Listing  