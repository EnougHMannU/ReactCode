import Carousel from 'react-bootstrap/Carousel';
import './cssfiles/Slider.css';
import pic1 from './pictures/1.png';
import pic2 from './pictures/2.png';
import pic3 from './pictures/3.png';
import pic5 from './pictures/5.png';
import Image from 'react-bootstrap/Image';

export default function Slider(){
    return(
        <div>
           <Carousel fade>
      <Carousel.Item>
       <Image src={pic1} alt="pic1" className="sliderclass"></Image>
        
      </Carousel.Item>

      <Carousel.Item>
        <Image src={pic2} alt="pic2" className="sliderclass"></Image>
        
      </Carousel.Item>

      <Carousel.Item>
        <Image src={pic3} alt="pic3" className="sliderclass"></Image>
        
      </Carousel.Item>

      <Carousel.Item>
        <Image src={pic5} alt="pic5" className="sliderclass"></Image>
        
      </Carousel.Item>
    </Carousel>
        </div>
    );
}