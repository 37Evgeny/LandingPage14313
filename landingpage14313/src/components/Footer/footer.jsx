import React from "react";
import './index.css';
import whatsapp from "./img/whatsapp.svg";
import telegram from "./img/telegram.svg";

function Footer() {

    return (
        <footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__col">
						<div className="contacts">
							<p className="contacts__title">Мы на связи</p>
							<a className="contacts__tel contacts__link" href="tel:89203465940">
                            Директор магазина:<br/>8 (920) 346-59-40 Евгений	
							</a>
							<p className="contacts__whatsapp">Мы в социальных сетях</p>
							<ul className="socials contacts__socials">
								<li className="socials__item">
                               
									<a className="socials__link" href="https://chat.whatsapp.com/IoSjqcXxWTD2g8djhTNY3p">
                                        <img src={whatsapp} alt="whatsapp" className="socials__icon" />
									</a>
									</li>
									<li className="socials__item">
									<a className="socials__link" href="https://t.me/+owO5FFluJ94xM2Ni">
										<img src={telegram} alt="telegram" className="socials__icon" />
									</a>
									</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;