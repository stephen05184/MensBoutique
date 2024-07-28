import React from "react";
import Img1 from "../../assets/clothes/casual.jpg";
import Img2 from "../../assets/clothes/formals.jpg";
import Img3 from "../../assets/clothes/suits.jpg";
import Img4 from "../../assets/clothes/tshirts.jpg";
import Img5 from "../../assets/clothes/Wedding.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casuals",
    rating: 5.0,
    color: "Green+Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Formals",
    rating: 4.5,
    color: "White+Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Suits",
    rating: 4.7,
    color: "Dark blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Wedding suits",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Clothes for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            C L O T H E S
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          A comprehensive collection of men's attire including casual wear, formal wear, sportswear, outerwear, accessories, and footwear, all designed for style, comfort, and versatility.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
