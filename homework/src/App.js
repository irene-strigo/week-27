
import './App.css';
import './components/Cards.css';
import
Card from './components/Cards';

const cards = [
  {
    name: "Безлимитный 300",
    price: "300",
    speed: "до 10 Мбит/сек",
    traffic: "Объем включенного трафика не ограничен",
    class: 'blue'
  },
  {
    name: "Безлимитный 450",
    price: "450",
    speed: "до 50 Мбит/сек",
    traffic: "Объем включенного трафика не ограничен",
    class: 'green'
  },
  {
    name: "Безлимитный 550",
    price: "550",
    speed: "до 100 Мбит/сек",
    traffic: "Объем включенного трафика не ограничен",
    class: 'red'
  },
  {
    name: "Безлимитный 1000",
    price: "1000",
    speed: "до 200 Мбит/сек",
    traffic: "Объем включенного трафика не ограничен",
    class: 'black'
  }
]

function App() {
  return (
    <div className="App">
      {
        cards.map((card) =>
          <Card name={card.name} price={card.price} speed={card.speed} traffic={card.traffic} class={card.class}></Card>
        )
      }

    </div>
  );

}

export default App;
