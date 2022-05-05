import "./App.css"
import React from "react"
import Navbar from "./components/Navbar"
//import Hero from "./components/Hero"
import Country from "./components/country"
import data from "./data"

export default function App() {
    const countries = data.map(country => {
        return (
            <Country className="b1"
                key={country.title}
                country={country}    
            />
        )
    })        
    
    return (
        <div className="App">

          <Navbar />
          {countries}

        </div>
    )
}
