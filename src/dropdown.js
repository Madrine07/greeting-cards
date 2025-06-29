import React, { useState } from 'react';

function DropdownForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected value:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="options">Choose an option:</label>
      <select id="options" value={selectedOption} onChange={handleChange}>
        <option value=""> Select </option>
        <option value="apple">Apple</option>
        <option value="banana">Bananas</option>
        <option value="cherry">Chips</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default DropdownForm;
