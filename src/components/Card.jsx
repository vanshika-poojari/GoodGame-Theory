import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Home = () => {
  const settings = {
    dots : false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0px',
  };

  const testimonials = [
    {
      id: "first", 
      quote: "Standard birth control methods are usually ineffective against a Swanson.", 
      img  : "path/to/public/img.jpg",
      author: "xyz name",
      position: "TheGoodGame Theory"
    },
    {
        id: "second", 
        quote: "Standard birth control methods are usually ineffective against a Swanson.", 
        author: "xyz name",
        position: "TheGoodGame Theory"
      },
      {
        id: "third", 
        quote: "Standard birth control methods are usually ineffective against a Swanson.", 
        author: "xyz name",
        position: "TheGoodGame Theory"
      },
     
  ];
  return (

    <div className="homediv">

      <Slider className = "slider" {...settings}>
        {testimonials.map((testimonial, index) => (
          <div id={testimonial.id} className="child-div" key={index}>
            <h2 className="heading">{testimonial.name}</h2>
            <p className="textdiv">"{testimonial.quote}"</p>
            <p className="textpara">{testimonial.author} <br /> {testimonial.position}</p>
          </div>
        ))}
      </Slider>


     
     

    </div>

  )
}

export default Home