import imgPensioner from './img/pencia14313.png'
import "./index.css"

function Pensioner() {
    return (
        <div className='pensioner'>
           <img src={imgPensioner} alt="Скидка пенсионерам" className='pensioner__img' />
            <span className='pencia__15'>Скидка -15%</span>
            <span className='pencia__mir'>При оплате картой мир</span>
        </div>
    )
}

export default Pensioner;