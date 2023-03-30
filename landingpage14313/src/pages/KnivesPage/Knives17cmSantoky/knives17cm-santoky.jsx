import s from './index.module.css';
import cn from 'classnames';
import santoky from './img/santoky.png'

function Santoky17cm() {

    return (
        <>
        <div className='knives17'>
           <div class="split left">
  <div class="centered">
    <img src={santoky} alt="Avatar woman"></img>
    <h2>Юлия Иванова</h2>
    <p>Какой-то текст.</p>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <img src={santoky} alt="Avatar man"></img>
    <h2>Федор Петров</h2>
    <p>Здесь тоже какой-то текст.</p>
  </div>
</div>
</div>
        </>
    )
}

export default Santoky17cm;

{/* <div className={cn(s.container)}>
<div className={cn(s.knives)}>
    <div className={cn(s.left)}>
        <h1>Кухонный нож Сантоку 17 см</h1>
        <p>Нож, который изначально создан на стыке двух культур: азиатсой и западной. Лучше всего подходит для тоной нарезки, нарезки кубиками и мелкой шинковки мяса для фарша.</p>
        <div className={cn(s.price)}></div>
        <span>Без наклеек</span>
        <span>40 наклеек</span>
        <span>80 наклеек</span>
    </div>
    <div className={cn(s.right)}>
        <img src={santoky} alt="Ножи в пятероче" className='santoky__img' ></img>
    </div>
</div>
</div> */}