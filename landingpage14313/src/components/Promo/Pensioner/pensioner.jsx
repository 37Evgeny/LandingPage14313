import imgPensioner from './img/pencia.png'
import "./index.css"

function Pensioner() {
    return (
        <div className='pensioner'>
            <img src={imgPensioner} alt="Скидка пенсионерам" className='pensioner__img' />
        </div>
    )
}

export default Pensioner;