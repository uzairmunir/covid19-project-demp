import InfoBox from './components/InfoBox'
import Chart from './components/GlobalStats'
import CountryPicker from './components/FootNav'
import NavBar from './components/NavBar'
import './App.css';
import { useEffect, useState } from 'react';
import FootNav from './components/FootNav';

/* 

        
          */

function App() {
  const configScreen=useState(0);
  return (
    <div className="container">
          <InfoBox currentScreen={configScreen[0]}/>
          <FootNav configScreen={configScreen}/>
     

    </div>
  );
}

export default App;
