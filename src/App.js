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
    try {
      let colors = new Values(color).all(20);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <div className="App">
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            value={color}
            placeholder="#f15025" 
            className={ `${ error ? 'error' : null }` }
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
