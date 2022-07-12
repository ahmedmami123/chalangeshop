
import { useState } from 'react';
import './App.css';
import Footer from './compe/Footer';
import Home from './compe/Home';
import Listeproduit from './compe/Listeproduit';
import Navbar from './compe/Navbar';
import {Routes,Route } from "react-router-dom"

function App() {
  const [category, setCategory] = useState([
    {
   id:Math.random(),
   category1:'Computer',

    },
    {
      id:Math.random(),
      category1:'Phone & Tablet',
   
       },
       {
        id:Math.random(),
        category1:'Storage',
     
         },
         {
          id:Math.random(),
          category1:'Impression',
       
           },
           {
            id:Math.random(),
            category1:'TV-Son-Photos',
         
             },

  ])
  return (
    <div className="App">
    <Navbar category={category}/>

<Routes>
  
  <Route path="/" element={<Home category={category}/>}/>
  <Route path="/Listeproduit/:category1" element={<Listeproduit category={category} />}/>
</Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
