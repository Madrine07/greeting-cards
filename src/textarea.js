// FormWithTextarea.js

import React, { useState } from 'react';

function TextareaForm() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted message:", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave us a Message here</h2>

      <div>
        <label>Your Message:</label>
        <br />
        <textarea
          value={message}
          onChange={handleChange}
          rows="5"
          cols="30"
          placeholder="Type your message"
        />
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default TextareaForm;
