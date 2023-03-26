import img15Sale from './img/15.png'
import "./index.css"

function Sale15() {
    return (
        <div className='saleBox'>
           <img src={img15Sale} alt="Скидка сопутка" className='15Sale__img' />
            <p className='saleSpan'>«Каждый месяц в «Пятёрочке» есть особенный день, чтобы выгодно закупиться косметикой и бытовой химией со скидкой 15%. Запомнить просто: скидка предоставляется 14 числа каждого месяца.</p>
        </div>
    )
}

export default Sale15;