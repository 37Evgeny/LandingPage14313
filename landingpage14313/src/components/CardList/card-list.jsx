import Card from '../Card/card';
import Sort from '../Sort/sort';
import { useContext } from "react"
import { CardContext } from "../../context/cardContext"
import './index.css';


const CardList = () => {
	const { currentCountry } = useContext(CardContext)
	return (
		<>
			<Sort/>
			<div className='cards'>
				{
					currentCountry.map((item, index) => <Card key={index} {...item} />)
				}
			</div>
		</>
	);
};

export default CardList;