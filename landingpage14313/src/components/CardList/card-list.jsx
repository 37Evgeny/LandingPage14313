import Card from '../Card/card';
import Sort from '../Sort/sort';
import { useContext } from "react"
import { CardContext } from "../../context/cardContext"
import './index.css';


const CardList = () => {
	const { cards } = useContext(CardContext)
	return (
		<>
			<Sort/>
			<div className='cards'>
				{
					cards.map((item, index) => <Card key={index} {...item} />)
				}
			</div>
		</>
	);
};

export default CardList;