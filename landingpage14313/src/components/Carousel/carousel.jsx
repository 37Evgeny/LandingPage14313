import { Carousel } from 'antd';
import './index.css';
import Knives2 from '../Promo/Knives14.03-29.04/knives-ve2';

const contentStyle = {
  height: '800px',
  color: '#364d79',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel__Promo = () => (
  <Carousel autoplay>
    <div>
      <Knives2/>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Carousel__Promo;