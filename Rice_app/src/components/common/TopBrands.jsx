import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy brand data
const brands = [
  { name: "India Gate", img: "/src/assets/indiagate.jpg" },
  { name: "Daawat", img: "/src/assets/rice2.png" },
  { name: "Fortune", img: "/src/assets/fortune.jpg" },
  { name: "KRBL", img: "/src/assets/rice4.jpg" },
  { name: "Patanjali", img: "/src/assets/ptjl.webp" },
  { name: "Tilda", img: "/src/assets/tilda.webp" },
  { name: "24 Mantra", img: "/src/assets/24mantra.jpg" },
  { name: "Organic India", img: "/src/assets/organicindia.webp" },
];

const TopBrands = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-success">Top Rice Brands</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="card  shadow-sm border-0 h-100 text-center p-3">
              <img
                src={brand.img}
                alt={brand.name}
                className="card-img-top mx-auto"
                style={{ width: "200px", height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{brand.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBrands;
