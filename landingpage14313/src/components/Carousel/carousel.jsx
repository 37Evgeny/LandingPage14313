import { Carousel } from 'antd';
import './index.css';
import Knives2 from '../Promo/Knives14.03-29.04/knives-ve2';
import Pensioner from '../Promo/Pensioner/pensioner';
import Sale15 from '../Promo/PomoSopytka/15Sale';

const Carousel__Promo = () => (
  <div className='carusel__container'>
<Carousel autoplay>
    <div className='carusel'>
      <Knives2/>
    </div>
    <div className='carusel2'>
      <Pensioner/>
    </div>
    <div className='carusel3'>
      <Sale15/>
    </div>
  </Carousel>
  </div>
  
);
export default Carousel__Promo;