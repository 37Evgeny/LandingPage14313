import { useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Tagline from "../Tagline/tagline";
import data from '../../assets/data.json';
import { CardContext } from '../../context/cardContext';

function App() {

    const [cards,setCards]=useState(data);
    const [currentSort, setCurrentSort] = useState("");

    const sortedData = (currentSort) => {

        switch (currentSort) {
          case 'low': setCards(cards.sort((a, b) => b.price - a.price)); break;
          case 'cheap': setCards(cards.sort((a, b) => a.price - b.price)); break;
          case 'sale': setCards(cards.sort((a, b) => b.discount - a.discount)); break;
          default: setCards(cards.sort((a, b) => a.price - b.price)); break;
        }
      }

    return (
        <CardContext.Provider value={{ cards,  currentSort, sortedData: sortedData, setCurrentSort }}>
        <>
            <Header />
            <main className='content container'>
                <CardList/>
                <Tagline />
            </main>
            <Footer />
        </>
        </CardContext.Provider>
    )
}

export default App;