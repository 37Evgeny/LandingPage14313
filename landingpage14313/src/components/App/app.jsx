import {  useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Tagline from "../Tagline/tagline";
import data from '../../assets/data.json';
import { CardContext } from '../../context/cardContext';
import Pagination from "../Pagination/pagination";
import Carousel__Promo from "../Carousel/carousel";
import Knives2 from "../Promo/Knives14.03-29.04/knives-ve2";

function App() {

    const [cards,setCards]=useState(data);
    const [currentSort, setCurrentSort] = useState("");
    const [currentPage,setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(12);
    
    const lastCountryIndex = currentPage * countriesPerPage; 
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = cards.slice(firstCountryIndex, lastCountryIndex);

    const paginate =  pageNumber => setCurrentPage(pageNumber);

//    Фунционал сортирови, чтобы фильтровать сезонное промо и недельное сделан костыль в promo добалена цифра 1 = сезонное промо, 0- недельное промо
    const sortedData = (currentSort) => {
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
        <CardContext.Provider value={{ cards,  currentSort, sortedData: sortedData, setCurrentSort, currentCountry }}>
        <>
            <Header />
            <main className='content container'>
                <Carousel__Promo/>
                {/* <Knives2/> */}
                <CardList/>
                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCounties={cards.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
                <Tagline />
            </main>
            <Footer />
        </>
        </CardContext.Provider>
    )
}

export default App;