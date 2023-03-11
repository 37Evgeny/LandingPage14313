import Logo from "../Logo/logo";
import s from './index.module.css';
import cn from 'classnames';

function Header() {

    return (
        <>
        <header className={cn(s.header)}>
      <div className={cn(s.container)}>
        <div className="left">
        <Logo />
        </div>
            <div className="right">
            <h1 className="addres">г.Кинешма ул.Социалистическая 25</h1>
            </div>
           
        </div>
     </header>
        </>

    )
}

export default Header;