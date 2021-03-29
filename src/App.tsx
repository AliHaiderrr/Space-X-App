import React, { useCallback, useState } from "react";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

import './App.css';

function App() {
const [id, setId] = useState(10);

const handelIdChange = useCallback(newId =>{
setId(newId)

}, []);

  return (

    <div className="App">
     
     
   
     
      <LaunchList  handelIdChange = {handelIdChange}/>
      <LaunchProfile id ={id}/>

    </div>
  );
}

export default App;
