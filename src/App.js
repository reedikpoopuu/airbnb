import React from "react";
import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import pic1 from "./images/tomz0266__medium.jpg";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='card--holder'>
        <Card 
        pic={pic1}
        status="SOLD OUT"
        rating="5.0"
        comments="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        currency="$"
        price="136"
        />
        <Card 
        pic={pic1}
        status="LAST TICKETS"
        rating="4.3"
        comments="22"
        country="Netherlands"
        title="Adventures of Alice in Wonderland"
        currency="€"
        price="205"
        />
      </div>
    </div>
  );
}

export default App;
