import './index.css';
import logoSrc from './img/logo_5ka.svg'


function Logo() {
  return (

        <img src={logoSrc} alt="Логотип компании" className='logo__pic' />

  )
}

export default Logo;