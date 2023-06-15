import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Home(){
  return (
    <h1>This is home page</h1>
  )
}

function About(){
  return(
    <h2>This is our About us page!</h2>
  )
}

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={ <Home />} />
      <Route path ="/about" element ={ <About />} />
    </Routes>
  </BrowserRouter>
  )
}