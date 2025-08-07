import React from 'react'
import ProductCard from './ProductCard';
import "bootstrap-icons/font/bootstrap-icons.css";
const ProductList = () => {
   const products = [
    {
      id: 1,

      title: "Today's Sales",
      
     userscount: `$1200`,
     percent : "10%",
     icon:<i class="bi bi-currency-dollar"></i>
    },
    {
      id: 2,
      title: "Today's Users",
     userscount: 950,
     percent : "25%",
      icon:<i class="bi bi-people-fill"></i>
    },
    {
      id: 3,
      title: "New Vendors",
      userscount: 700,
      percent : "12%",
      icon: <i class="bi bi-person-vcard"></i>
      
    },
       {
      id: 4,
      title: "New Orders",
      userscount: 540,
      percent : "17%",
      icon:<i class="bi bi-bag-check-fill"></i>

    }
  ];

  return (
    <div className="container py-4">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard
            
              title={product.title}
              description={product.description}
              price={product.userscount}
              percent={product.percent}
              icon={product.icon}

            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList
