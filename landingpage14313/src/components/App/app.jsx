import { useState } from "react";
import CardList from "../CardList/card-list";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Tagline from "../Tagline/tagline";
import data from '../../assets/data.json';

function App() {

    const [cards,setCards]=useState(data);

    return (
        <>
            <Header />
            <main className='content container'>
                <CardList goods={cards}/>
                <Tagline />
            </main>
            <Footer />
        </>

    )
}

export default App;