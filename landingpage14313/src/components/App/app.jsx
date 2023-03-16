import { useCallback, useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Tagline from "../Tagline/tagline";
import data from '../../assets/data.json';
import { CardContext } from '../../context/cardContext';
import Knives from "../Promo/Knives14.03-29.04/knives";
import Knives2 from "../Promo/Knives14.03-29.04/knives-ve2";

function App() {

    const [cards,setCards]=useState(data);
    const [currentSort, setCurrentSort] = useState("");
    const [promo, setPromo] = useState(data)


//    Фунционал сортирови, чтобы фильтровать сезонное промо и недельное сделан костыль в promo добалена цифра 1 = сезонное промо, 0- недельное промо
    const sortedData = (currentSort) => {
        const month=cards;
        const week=cards;
        switch (currentSort) {
          case 'low': setCards(cards.sort((a, b) => b.price - a.price)); break;
          case 'cheap': setCards(cards.sort((a, b) => a.price - b.price)); break;
          case 'sale': setCards(cards.sort((a, b) => b.discount - a.discount)); break;
          case 'month': setCards(cards.sort((a,b) => b.promo - a.promo  ));break;
          case 'week': setCards(cards.sort((a,b) => a.promo - b.promo));break;
          default: setCards(cards.filter((a, b) => a.price - b.price)); break;
        }
      }

    return (
        <CardContext.Provider value={{ cards,  currentSort, sortedData: sortedData, setCurrentSort }}>
        <>
            <Header />
            <main className='content container'>
                <Knives2/>
                <CardList/>
                <Tagline />
            </main>
            <Footer />
        </>
        </CardContext.Provider>
    )
}

export default App;