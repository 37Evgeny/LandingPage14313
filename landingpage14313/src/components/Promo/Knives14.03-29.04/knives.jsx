import imgNoji from './img/imgNoji.jpg'
import "./index.css"

function Knives() {
    return (
        <div className='knives'>
            <img src={imgNoji} alt="Ножи в Пятерочке" className='knives__img' />
        </div>
    )
}

export default Knives;