import React from "react";
import Navbar from "./components/Navbar"
import Data from "./data"
import Info from "./components/Info"

export default function App() {
  
  const info = Data.map(item => {
    return (
      <Info 
        key = {item.id}
        item = {item}
      />
    )
  })
  
  
  
  return (
    <div>
      <Navbar />
    <section className="info-list">
      {info}
    </section>
    </div>
  );
}