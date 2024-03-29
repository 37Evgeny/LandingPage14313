
import './index.css';
// import {ReactComponent as Save} from "./save.svg";

const Card = ({ name, price, discount, wight, description, picture, dataPromo }) => {

	const discount_price = Math.round(price - price * discount / 100)

	return (
		<div className="card">
			<div className="card__sticky card__sticky_type_top-left">
				{discount !== 0 && <span className="card__discount">{`-${discount}%`}</span>}
			</div>
			<div className="card__sticky card__sticky_type_top-right">

			</div>
			<a href="/" className="card__link">
				<img src={picture} alt={description} className="card__image" />
				<div className="card__desc">
					<p className="card__name">{name}</p>
					<span className="card__wight">{wight}</span>
					<span className={discount !== 0 ? "card__old-price" : "card__price"}>{price}&nbsp;₽</span>
					{discount !== 0 && <span className="card__price card__price_type_discount">от {discount_price}&nbsp;₽</span>}
					<span className='card__promo'>{dataPromo}</span>
				</div>
			</a>
		</div>
	);
};

export default Card;