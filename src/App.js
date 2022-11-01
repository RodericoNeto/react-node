import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {

  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("/books")
  //     .then((response) => response.json())
  //     .then(data =>{
  //       console.log('data', data)
  //       setBooks(data)
  //     })    
  // }, []);

  useEffect(() => {
    axios.get("/books")
    .then((response) => {
      console.log(response.data)
      setBooks(response.data)
    })  
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {JSON.stringify(books)}
      </header>
    </div>
  );
}

export default App;
