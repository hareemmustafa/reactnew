import React from 'react';
import './App.css';
import Student from './student.js';

function App() {
  return(
    <div className= "App">
     <Student studentName="Hareem Mustafa"
              zodiacSign="Aries" />
      <hr/>
      <Student studentName="Hoorain"
              zodiacSign="Scorpio" />
      <hr/>
      <Student studentName="Khadeeja"
              zodiacSign="Cancer" />

    </div>
  );
}
export default App;