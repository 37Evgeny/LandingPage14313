import s from './styles.module.css';
import cn from 'classnames';
import Tagline from '../../Tagline/tagline';

function Happy() {
    return (
        <>
            <div className={cn(s.happy)}>
            <div className={cn(s.happy__text)}>
                <p class>День рождения магазина</p>
                <p>НАМ 5 ЛЕТ</p>
                <p>Совершайте покупки на сумму 555&nbsp;₽ с 5.04 - 26.04 учавствуйте в РОЗЫГРЫШЕ ПРИЗА</p>
                <p className={cn(s.happy__text__days)}>РОЗЫГРЫШ СОСТОИТСЯ 27.04 в 18:00</p>
            </div>
            <div className={cn(s.happy__text__footer)}>
            <p>*Обязательное условие для участия личное присутствие в день розыгрыша<br />**Для участия в розыгрыше на чеке напишите свой номер телефона и опустите в короб</p>
            </div>
         </div>
         <Tagline/>
        </>
    )
}

export default Happy;