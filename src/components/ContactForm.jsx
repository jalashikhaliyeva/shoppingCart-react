import React from 'react';

function ContactForm({ onSubmit }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const inputText = formData.get('inputText');
      onSubmit(inputText);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputText" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  

export default ContactForm ;