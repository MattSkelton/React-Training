const Total = ({parts}) => {
  console.log (parts)
    const total = parts.reduce((sum, element) => sum + element.exercises, 0)  
    return (
      <p>Number of exercises {total}</p>
    )
  }

  export default Total