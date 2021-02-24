import React, { useState } from "react";
import Values from "values.js";
import SingleColor from './SingleColor';

import "./styles.css";

export default function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  }
  return (
    <div className="App">
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            value={color}
            placeholder="#f15025" 
            onChange={(e) => setColor(e.target.value)} />
          <button type="submit">Generate</button>
        </form>
      </section>
      <section className="colors">
        <h4>List goes here</h4>
      </section>
    </div>
  );
}
