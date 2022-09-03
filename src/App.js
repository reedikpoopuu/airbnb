import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import Timer from "./components/timer";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='card--holder'>
        <Card />
        <Card />
      </div>
      <Timer />
      <div className='card--holder'>
      <Contact
        img="../images/cat.jpg" 
        name="Mr. Whiskerson" 
        phone="(212) 555-1234" 
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="../images/cat.jpg" 
        name="Fluffykins" 
        phone="(212) 555-2345" 
        email="fluff@me.com"
      />
      <Contact
        img="../images/cat.jpg" 
        name="Felix" 
        phone="(212) 555-4567" 
        email="thecat@hotmail.com"
      />
      <Contact
        img="../images/cat.jpg" 
        name="Pumpkin" 
        phone="(0800) CAT KING" 
        email="pumpkin@scrimba.com"
      />
      </div>
    </div>
  );
}

export default App;
