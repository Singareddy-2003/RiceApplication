// 

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swiperimg = () => {
  return (
    <div className="hero-swiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="mySwiper"
      
      >
        {/* Slide 1: Main Hero */}
        <SwiperSlide className="d-flex align-items-center justify-content-center hero-slide text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 text-start">
                <h1 className="display-4 fw-bold text-dark ">
                  {/* Premium Quality Rice <br /> Delivered to Your Doorstep */}
                  Welcome to <span className='text-success'>Rice</span> <span className='text-warning'> Mart</span>
                </h1>
                <p className="lead my-3 text-dark fw-bold fs-5">
                  {/* 🎉 Upto <span className="fw-bold text-light fs-3">30% OFF</span> on First Order! */}
                  "Your one-stop destination for premium rice varieties  straight from the farm to your plate. From fragrant Basmati to nutritious Brown Rice"
                </p>
                <button className="btn btn-warning fw-bold px-4 py-2 shadow">
                  Shop Now
                </button>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 my-2">
                <img src="https://webstockreview.net/images/rice-clipart-rice-packet-9.png" alt="Hero" className="img-fluid " />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Buy 1 Get 1 */}
        <SwiperSlide className="d-flex align-items-center justify-content-center hero-slide text-white">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 col-12 col-md-6 my-5">
                <img src="/src/assets/buy1get1.png" alt="BOGO Rice" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 text-start">
                <h1 className="display-4 fw-bold text-success">
                 <span className='text-warning'> Buy 1 Get 1 Free </span> <br /> On Select Varieties
                </h1>
                <p className="lead my-3 text-dark fs-5">
                  🛒 Double the grains, double the joy. Limited stock!
                </p>
                <button className="btn btn-success fw-bold px-4 py-2 shadow">
                  Claim Offer
                </button>
              </div>
            
            </div>
          </div>

     

        </SwiperSlide>

        {/* Slide 3: Farmer Direct */}
        <SwiperSlide className="d-flex align-items-center justify-content-center hero-slide text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 text-start">
                <h1 className="display-4 fw-bold text-success ">
                  Direct From Farmers  <br /> <span className='text-dark'>Freshness Guaranteed</span>
                </h1>
                <p className="lead my-3 text-dark fs-5">
                  Support local farmers and get the best farm-to-table rice.
                </p>
                <button className="btn btn-warning fw-bold px-4 py-2 shadow">
                  Explore Now
                </button>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 col-md-6  my-5">
                <img src="https://sdmntpreastus.oaiusercontent.com/files/00000000-95ec-61f9-9a3a-f161e8886446/raw?se=2025-07-27T09%3A22%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=c722fdf3-a372-5ac0-830f-48ae88686daf&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-26T12%3A56%3A30Z&ske=2025-07-27T12%3A56%3A30Z&sks=b&skv=2024-08-04&sig=pgiPZZEClLyA1%2BefoNCjxI%2BGAombJ5W24BvnROAm%2Bgo%3D" alt="Farmer Rice" className="img-fluid mx-auto   " />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4: Bulk Orders */}
        <SwiperSlide className="d-flex align-items-center justify-content-center hero-slide text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 text-start">
                <h1 className="display-4 fw-bold text-success">
                  <span className='text-warning'>Bulk Orders?</span> <br /> We’ve Got You Covered
                </h1>
                <p className="lead my-3 text-dark  fs-5">
                   Special pricing for restaurants, caterers, and retailers.
                </p>
                <button className="btn btn-outline-primary fw-bold px-4 py-2 shadow">
                  Contact Us
                </button>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 my-5">
                <img src="/src/assets/ricebg2.png" alt="Bulk Rice" className="img-fluid " />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Organic Collection */}
        <SwiperSlide className="d-flex align-items-center justify-content-center hero-slide text-white ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-start">
                <h1 className="display-4 fw-bold text-success">
                 100% Organic Collection  Taste the Purity
                </h1>
                <p className="lead my-3 text-dark fs-5">
                  Chemical-free, delicious, and good for you.
                </p>
                <button className="btn btn-outline-success fw-bold px-4 py-2 shadow">
                  Shop Organic
                </button>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 col-md-6 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.65Q2y0lahpg1Y7hXcp2BUAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Organic Rice" className="img-fluid shadow rounded" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperimg;
