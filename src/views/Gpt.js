// src/Gpt.js
import React, { useState } from 'react';
import axios from 'axios';

function Gpt() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        }
      });

      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching the GPT response:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GPT-4 Integration with React</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="10"
            cols="50"
            placeholder="Type your prompt here..."
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {response && (
          <div>
            <h2>Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Gpt;