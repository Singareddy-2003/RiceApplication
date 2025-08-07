import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import TopBrands from '../../components/common/TopBrands';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="container-fluid py-5 bg-light gridabout shine">
        <h1 className='text-center display-4 fw-bold '>
          Explore Our <span className='text-success'>Rice</span> <span className='text-warning'>Mart</span>
        </h1>
        <p className='text-center text-muted fs-5'>
          Empowering Farmers. Nourishing Consumers.
        </p>
      </div>

      {/* Hero Section */}
      <div className="container my-5">
        <div className="row align-items-center">

          {/* Image Grid */}
          <div className="col-12 col-md-6">
            <div className="row g-3">
              <div className="col-6">
                <img src="https://c8.alamy.com/comp/DYCDEC/stacks-of-bags-of-rice-sold-at-a-grocery-shop-in-ealing-road-in-north-DYCDEC.jpg" alt="Office" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f9953262192369.5a881cc915828.jpg" alt="Farmers" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src="https://wallpapers.com/images/hd/ripe-sprig-of-rice-osp4z6onrtk3r098.jpg" alt="Packaging" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src="https://ts2.mm.bing.net/th?id=OIP.aZsGiwEdx-mwg6n7havkDAHaE9&pid=15.1" alt="Team" className="img-fluid rounded shadow-sm" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold text-success">About Us</h2>
            <p className="">
              Founded with a vision in 2024, <strong>Rice Mart</strong> is a purpose-driven agri-commerce platform committed to
              bridging the gap between hardworking farmers and modern consumers. We aim to deliver quality rice varieties
              that are not only fresh but also ethically sourced.
            </p>

            <h5 className="text-warning mt-4">Our Mission</h5>
            <p className="">
              To build a sustainable supply chain that rewards farmers fairly and provides consumers with access to
              affordable, nutritious, and chemical-free rice—all through a seamless digital experience.
            </p>

            <h5 className="text-warning mt-4">Core Values</h5>
            <ul className=" ps-1">
              <li>Transparency in sourcing</li>
              <li>Empowering local farming communities</li>
              <li>Zero-compromise on quality</li>
              <li>Fast and fresh delivery</li>
            </ul>
          </div>
        </div>
      </div>
      {/* hero section end  */}

      {/* our investors start */}
      <div className="container">
  <h1 className='text-center text-success my-4'>Our Investors</h1>

  <Swiper
    className="mySwiper"
    spaceBetween={20}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
      },
    }}
  >

    <SwiperSlide>
      <div className="card shadow-sm my-2">
        <img src="/src/assets/p1.webp" className="card-img-top" height={210} alt="..." />
        <div className="card-body">
          <h5 className="card-title">David Warner</h5>
          <p className="card-text">A visionary investor and global cricket icon, David brings leadership, bold strategy, and a deep belief in sustainable agriculture across borders.</p>
        </div>
      </div>
    </SwiperSlide>


    <SwiperSlide>
      <div className="card shadow-sm my-2">
        <img src="/src/assets/p2.webp" className="card-img-top" height={210} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Kane Williamson</h5>
          <p className="card-text">Known for his calm precision and thoughtful insights, Kane supports Rice Mart’s mission to create a fair, transparent supply chain for both farmers and customers.</p>
        </div>
      </div>
    </SwiperSlide>


    <SwiperSlide>
      <div className="card shadow-sm my-2">
        <img src="/src/assets/p3.jpg" className="card-img-top" height={210} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Samson</h5>
          <p className="card-text">A rising star with a heart for innovation, Samson backs Rice Mart to leverage technology for rural development and next-gen farming solutions.</p>
        </div>
      </div>
    </SwiperSlide>


    <SwiperSlide>
      <div className="card shadow-sm my-2">
        <img src="/src/assets/p4.jpg" className="card-img-top" height={210} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Martin Lucifer</h5>
          <p className="card-text">An angel investor with a sharp eye for scalable startups, Martin fuels Rice Mart’s digital transformation to make organic rice accessible to all.</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
      </div>
      {/* our investors end */}

      {/* happy clients start */}
      <div className="container">
        <div className="row  bg-warning rounded shadow my-5">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 p-5">
     <div>
     <span className='text-center d-block fs-1'> <i className="bi bi-person-hearts "></i></span>
      <h4 className='text-center fw-bold'>850+</h4>
      <h5 className= 'text-center fw-bold'>Happy Clients</h5>
     </div>

          </div>

           <div className="col-3 col-sm-3 col-md-3 col-lg-3 p-5">
     <div>
     <span className='text-center d-block fs-1'> <i className="bi bi-trophy-fill"></i></span>
      <h4 className='text-center fw-bold'>1850+</h4>
      <h5 className= 'text-center fw-bold'>Successful Sales</h5>
     </div>

          </div>

           <div className="col-3 col-sm-3 col-md-3 col-lg-3 p-5">
     <div>
     <span className='text-center d-block fs-1'> <i className="bi bi-calendar-check-fill"></i></span>
      <h4 className='text-center fw-bold'>5+</h4>
      <h5 className= 'text-center fw-bold'>Business Years</h5>
     </div>

          </div>

           <div className="col-3 col-sm-3 col-md-3 col-lg-3 p-5">
     <div>
     <span className='text-center d-block fs-1'> <i className="bi bi-person-hearts "></i></span>
      <h4 className='text-center fw-bold'>850+</h4>
      <h5 className= 'text-center fw-bold'>Happy Clients</h5>
     </div>

          </div>

        </div>
      </div>
      {/* happy clients end */}

  {/* our timeline  */}

<div className="container">
  <h1 className="text-center fw-bold my-1">Our Timeline </h1>
  <div className="card my-2">
    <div className="card-body">
      <h4>The Seed Was Sown</h4>
<p>The vision of making quality rice accessible to all began.</p>

<p>A small group of passionate farmers and tech enthusiasts teamed up.</p>

<p>Initial groundwork started for sourcing rice directly from local farms</p>
    </div>
  </div>
     <img src="/src/assets/snake.png" alt=""  className='img-fluid ' />

</div>


      <TopBrands />
      <Footer />
    </>
  );
};

export default About;
