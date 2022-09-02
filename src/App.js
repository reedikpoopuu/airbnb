import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='card--holder'>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
