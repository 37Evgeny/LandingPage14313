import React from "react";
import notFound from './img/img.png';
import s from './styles.module.css';

export const NotFound = ( {children} ) => {
	return (
		<>
			<div className={s.notFound}>
				<img src={notFound} className={s.image} aria-hidden="true" alt="" />
				{children && children}
                <h1>Ой!?! <br/>что-то сломалось!</h1>
			</div>
        </>
	);
}
