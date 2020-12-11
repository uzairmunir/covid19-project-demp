import React, { useEffect, useState } from 'react';
import AllCountries from './AllCountries';
import GlobalStats from './GlobalStats'


export default function infoBox({currentScreen}) {
  if(currentScreen === 0)
  {
    return <GlobalStats/>
  }
  else if(currentScreen === 1){
   return <AllCountries/>
  }
  else{
    console.log(" ")
  }
  return (
    <div>
     
    </div>
  );
}