import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselFade() {
  return (
    <div>
      {/* Desktop Carousel */}
      <Carousel fade className='carousel carouselDesktop'>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/bridges-ports/ports (19).jpg'
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/women/women (6).jpg'
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/landscape/landscape (2).jpg'
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      {/* Mobile Carousel */}
      <Carousel fade className='carousel carouselMobile'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/bridges-ports/ports (14).jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/everyday-situations/situations (10).jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/landscape/landscape (24).jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>

      {/* Tablet Carousel */}
      <Carousel fade className='carousel carouselTablet'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/landscape/landscape (6).jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/everyday-situations/situations (11).jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/interiors/interiors (3).jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default CarouselFade;