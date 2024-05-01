import name1 from './../../assets/image/home carousel/1.jpg';
import name2 from './../../assets/image/home carousel/2.jpg';
import name3 from './../../assets/image/home carousel/3.jpg';
import name4 from './../../assets/image/home carousel/4.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={name1} className="w-full" />
        <div className="absolute flex bottom-0 justify-end transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide4" className="btn btn-circle mr-4">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={name2} className="w-full" />
        <div className="absolute flex bottom-0 justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="btn btn-circle mr-4">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={name3}  className="w-full" />
        <div className="absolute flex bottom-0 justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide2" className="btn btn-circle mr-4">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={name4} className="w-full" />
        <div className="absolute flex bottom-0 justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide3" className="btn btn-circle mr-4">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;