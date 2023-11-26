import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {
  const [records, setRecords] = useState([]);
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    setCounter(counter-1)
  }
  const reset = () => {
    setCounter(0)
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setRecords(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <table>
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td>
              <td>{r.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
     
    </div>
  );
}

export default App;
