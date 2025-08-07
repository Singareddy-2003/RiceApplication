import React from 'react'
import Navbar from '../../components/common/Navbar'
import Swiperimg from '../../components/common/Swiperimg'
import Footer from '../../components/common/Footer'
import TopBrands from '../../components/common/TopBrands'

const Home = () => {
  return (
   <>
   {/* <Navbar/> */}
   <Swiperimg/>
   <TopBrands/>
   {/* FAQ */}
   <section className="container my-5">
  <h2 className="text-center fw-bold mb-4 text-success">Frequently Asked Questions</h2>
  <div className="accordion" id="faqAccordion">
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="faq1">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer1" aria-expanded="true" aria-controls="answer1">
          What types of rice do you sell?
        </button>
      </h2>
      <div id="answer1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          We offer a variety of premium rice including Basmati, Sona Masoori, Brown Rice, and more—sourced directly from local farmers.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faq2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer2" aria-expanded="false" aria-controls="answer2">
          Is your rice organic or pesticide-free?
        </button>
      </h2>
      <div id="answer2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Yes, we prioritize organic farming practices. Many of our products are organically grown without synthetic pesticides or chemicals.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faq3">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer3" aria-expanded="false" aria-controls="answer3">
          How do I place an order?
        </button>
      </h2>
      <div id="answer3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Browse our product list, add items to your cart, and complete checkout using your preferred payment method.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faq4">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer4" aria-expanded="false" aria-controls="answer4">
          Do you offer bulk purchase discounts?
        </button>
      </h2>
      <div id="answer4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Absolutely! Contact our sales team for custom pricing on bulk or wholesale orders.
        </div>
      </div>
    </div>


    
  </div>
</section>

   <Footer/>
   </>
  )
}

export default Home
