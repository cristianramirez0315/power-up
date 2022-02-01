import React from 'react';
import 'bulma/css/bulma.min.css';
import '../src/main.scss';

// Components of the page
import Nav from './components/nav';
import Homepage from './components/homepage';
import Powerupapp from './pages/powerupapp';

//Page Components

//Sign Up


//Login In

//Power-Up App Logged in Page




function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <Homepage></Homepage>
        <Powerupapp></Powerupapp>
      </main>
    </div>
  );
}



export default App;
