import { Carousel } from 'antd';
import './index.css';
import Knives2 from '../Promo/Knives14.03-29.04/knives-ve2';
import Pensioner from '../Promo/Pensioner/pensioner';
import Sale15 from '../Promo/PomoSopytka/15Sale';
import Happy from '../Promo/HappyBrithDay/happy';

const Carousel__Promo = () => (
<Carousel >
    <div className='carusel'>
      <Knives2/>
    </div>
    <div className='carusel2'>
      <Pensioner/>
    </div>
    <div className='carusel3'>
      <Sale15/>
    </div>
    <div className='carusel4'>
     <Happy/>
    </div>
  </Carousel>
);
export default Carousel__Promo;