import cn from "classnames";
import "./index.css";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

const tabs = [
	{
		id: "cheap",
		title: 'Сначала дешевые'
	},
	{
		id: "low",
		title: 'Сначала дорогие'
	},
	{
		id: "sale",
		title: 'По скидке'
	},
	{
		id: "month",
		title: "Акции по карте"
	}, 
	{
		id: "week",
		title: "Недельная акция"
	}, 
];

const Sort = () => {
    const { currentSort, setCurrentSort, sortedData } = useContext(CardContext)

	const handleClick = (e, tab) => {
		e.preventDefault();
		setCurrentSort(tab.id)
		sortedData(tab.id)
	}

	return (
		<div className="sort content__sort">
			{tabs.map(tab => (
				<div
					className={cn("sort__link", {
						"sort__link_selected": currentSort === tab.id
					})}
					key={tab.id}
					id={tab.id}
				>
				
					<div onClick={(e) => handleClick(e, tab)}>
						{tab.title}
					</div>
				</div>
			))}
		</div>
	);
};

export default Sort;