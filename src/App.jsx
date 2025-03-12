import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import List from './List/List'
import Hotel from './Hotel/Hotel'
import { useState } from "react";

export default function App(){
  const [rec, sRec] = useState() 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels/" element={<List sRec={sRec}/>} />
        <Route path="/hotel/:id" element={<Hotel rec={rec}/>} />
      </Routes>
    </Router>
  )
}