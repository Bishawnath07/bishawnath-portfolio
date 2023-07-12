import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './Images/First/Screenshot 1.png';
import image2 from './Images/First/Screenshot 2.png';
import image3 from './Images/First/Screenshot 3.png';
import image4 from './Images/First/Screenshot 4.png';
import image5 from './Images/First/Screenshot 5.png';
import image6 from './Images/First/Screenshot 6.png';
import image7 from './Images/First/Screenshot 7.png';
import image8 from './Images/First/Screenshot 8.png';
import image9 from './Images/First/Screenshot 9.png';
import image10 from './Images/First/Screenshot 10.png';
import image11 from './Images/First/Screenshot 11.png';



const AutoImageSlider = () => {

    return (
        <Carousel autoPlay infiniteLoop className='text-center '>
          <div>
            <img src={image1} alt="Image 1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src={image2} alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={image3} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image4} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image5} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image6} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image7} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image8} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image9} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image10} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src={image11} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      );
    };

export default AutoImageSlider;
