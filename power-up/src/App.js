import React from 'react';
import Nav from './components/nav';
import Homepage from './components/homepage';
import 'bulma/css/bulma.min.css';
import '../src/main.scss';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <Homepage></Homepage>
      </main>
    </div>
  );
}



export default App;
