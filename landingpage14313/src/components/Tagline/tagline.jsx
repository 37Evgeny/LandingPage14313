import taglineImg from './img/taglineImg.svg'
import "./index.css"

function Tagline() {
    return (
        <div className='taglineImg'>
            <img src={taglineImg} alt="Слоган" className='tagline__img' />
        </div>
    )
}

export default Tagline;