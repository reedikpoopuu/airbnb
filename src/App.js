import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import cardsData from "./components/data";

export default function App() {
  const cardElements = cardsData.map(card => {
    return <Card 
    key={card.id}
    item={card.item}
    />
  })
  return (
    <div>
      <Header />
      <Hero />
      <div className='card--holder'>
      {cardElements}
      </div>
    </div>
  );
}
