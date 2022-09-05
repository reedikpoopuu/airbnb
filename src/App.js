import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import cardsData from "./components/data";

export default function App() {
  const cardElements = cardsData.map(card => {
    return <Card 
    key={card.id}
    pic={card.pic}
    status={card.status}
    rating={card.stats.rating}
    comments={card.stats.reviewCount}
    country={card.location}
    title={card.title}
    currency={card.currency}
    price={card.price}
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
