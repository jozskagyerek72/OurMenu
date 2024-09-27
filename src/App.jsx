
import './App.css'
import { Menus } from './components/Menus'
import { StickyHeader } from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  
  const [selectedCateg, setselectedcateg] = useState("all")

  
  return (
    <>
      <div className="container shadow">
        <StickyHeader setselectedcateg={setselectedcateg} selectedCateg={selectedCateg}/>
        <Menus selectedCateg={selectedCateg} />
      </div>

      
    </>
  )
}

export default App
