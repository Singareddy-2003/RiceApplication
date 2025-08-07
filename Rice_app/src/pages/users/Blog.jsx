import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const blogs = [
  {
    title: "The Journey of a Grain: From Paddy to Plate",
    description: "Explore the fascinating process of rice cultivation, harvesting, and milling from farm to your kitchen.",
    image: "/src/assets/b1.webp"
  },
  {
    title: "Different Types of Rice and Their Health Benefits",
    description: "Learn about Basmati, Brown, Red, and Black rice, and who should be eating what for health.",
    image: "/src/assets/b2.jpg"
  },
  {
    title: "How to Properly Store Rice at Home",
    description: "Avoid spoilage! Discover the best practices to store rice and preserve its aroma and texture.",
    image: "/src/assets/b3.webp"
  },
  {
    title: "Understanding Organic vs. Regular Rice",
    description: "What does 'organic' really mean? Bust the myths and find out how to identify truly organic grains.",
    image: "/src/assets/b4.webp"
  },
];

const behindTheScenesBlogs = [
  {
    title: "Why We Started Our Rice Business",
    description: "Discover the passion and purpose that planted the seed for our journey — from humble beginnings to a trusted rice brand.",
    image: "/src/assets/team.jpg"
  },
   {
    title: "Meet Our Suppliers: The Faces Behind Your Grains",
    description: "Real people. Real stories. Meet the local heroes—our suppliers—who make sure quality rice reaches your table every day.",
    image: "/src/assets/store.jpg"
  },
  {
    title: "A Day in the Life of a Rice Farmer",
    description: "Take a walk through the fields with our farmers and witness the care, dedication, and sweat that goes into every grain we sell.",
    image: "/src/assets/farmer.jpeg"
  },
  {
    title: "Meet Our Suppliers: The Faces Behind Your Grains",
    description: "Real people. Real stories. Meet the local heroes—our suppliers—who make sure quality rice reaches your table every day.",
    image: "/src/assets/r2.webp"
  }
];

  const blogPosts = [
    {
      id: 1,
      title: "The Journey of a Grain: From Farm to Plate",
      image: "/src/assets/hero2.png",
      desc: "Discover how your favorite rice travels from lush fields to your kitchen. A look behind the scenes.",
      author: "Mahanth",
      date: "July 27, 2025"
    },
    {
      id: 2,
      title: "Top 5 Nutritional Benefits of Eating Rice",
      image: "/src/assets/ricebenfits.webp",
      desc: "Rice isn’t just delicious—it’s packed with health benefits too. Let’s explore them!",
      author: "Health Expert",
      date: "July 25, 2025"
    },
    {
      id: 3,
      title: "Brown Rice vs White Rice: What’s the Difference?",
      image: "/src/assets/bvsw.gif",
      
      desc: "Both have their place on your plate, but which one suits your lifestyle better? Let’s break it down.",
      author: "Nutritionist Team",
      date: "July 22, 2025"
    },
    {
      id: 4,
      title: "A Day in the Life of a Rice Farmer",
      image: "/src/assets/farmerday.jpg",
      desc: "Take a walk in the muddy boots of our dedicated rice farmers and see how every grain is grown with care.",
      author: "Agri Journal",
      date: "July 20, 2025"
    }
  ];

const Blog = () => {
  return (


    <>
    {/* <Navbar/> */}

    <div className="bg-light text-center">
  <div className="container-fluid">
    <h1 className="display-4 fw-bold py-2  ">🌾 Rice Blog & Stories</h1>
    <p className="lead text-muted">
      Dive into the flavorful world of rice — from farming roots to foodie recipes. 
      Get inspired, informed, and hungry!
    </p>
    <img 
      src="/src/assets/ricebg.jpg" 
      alt="Rice Hero Banner" 
      className="img-fluid rounded shadow-sm mt-3 " 
      style={{ maxHeight: '510px', objectFit: 'cover', width:'100vw'  }}
    />
  </div>
</div>


  <div className="container ">
      <h2 className="text-center fw-bold  text-success my-3">🌾 Explore insights, tips, and tales from the world of rice.</h2>
      {/* <p className="text-center text-muted ">Explore insights, tips, and tales from the world of rice.</p> */}

      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm bcard">
              <img src={post.image} className="card-img-top h-100" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.desc}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">By {post.author} on {post.date}</small>
                <a href="#" className="btn btn-success btn-sm">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-3">
      <h2 className="text-center fw-bold text-success mb-4">Educational Blogs</h2>
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 blog-card">
              <img src={blog.image} className="card-img-top blog-img" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <button className="btn btn-success">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



<div className="container my-5">
      <h2 className="text-center fw-bold text-success mb-4">Behind the Scenes</h2>
      <div className="row g-4">
        {behindTheScenesBlogs.map((blog, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 blog-card">
              <img src={blog.image} className="card-img-top blog-img" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <button className="btn btn-outline-success">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    
    <Footer/>
    </>
  );
};

export default Blog;
