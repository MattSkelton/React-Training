const Filter = ({ value, onChange }) => {
    return (
      <div>
        Filter shown with: 
        <input value={value} onChange={onChange} />
        <br/>
      </div>
    );
  };
  
  export default Filter;
  