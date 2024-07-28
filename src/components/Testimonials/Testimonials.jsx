import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Happy Aanand",
    text: "Fast delivery, great communication, and fantastic products. Couldn't ask for more. Highly recommend!",
    img: "src/assets/Testiomonal/WhatsApp Image 2024-07-28 at 9.34.54 AM.jpeg",
  },
  {
    id: 2,
    name: "Pondy Vijay",
    text: "Exceptional service and premium quality products. Very happy with my purchase and will be a returning customer!",
    img: "src/assets/Testiomonal/WhatsApp Image 2024-07-28 at 9.34.42 AM.jpeg",
  },
  {
    id: 3,
    name: "Kavi",
    text: "Amazing experience! The product quality exceeded my expectations, and the customer service was top-notch. Will definitely buy again!",
    img: "src/assets/Testiomonal/WhatsApp Image 2024-07-28 at 9.34.41 AM.jpeg",
  },
  {
    id: 4,
    name: "Ragul",
    text: "The product was exactly as described, and the customer service was fantastic. Highly recommend this company!",
    img: "src/assets/Testiomonal/WhatsApp Image 2024-07-28 at 9.34.42 AM (1).jpeg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Fantastic products and exceptional service! Highly recommend. Amazing quality and top-notch service. Will buy again! Outstanding service and excellent products! Very impressed. Fast delivery, great communication. Highly recommend! Impeccable service and superb quality. Five stars! 
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
