import img640 from './img/img640.jpg'
import "./index2.css"

function Knives2() {
    return (
        <>
        <div className='knives'>
            <div className='left'>
                 <img src={img640} alt="Ножи в Пятерочке" className='knives__img' />
            </div>
            <div className='right'>
                <p className='dates__promo'>14 марта - 29 мая</p>
                <p className='text__promo'>Стильные ножи <br/>со скидкой за наклейки</p>
                <p className='mark__promo'>200₽ = 1 наклейка</p>
            </div>
            
        </div>
        </>
        
    )
}

export default Knives2;