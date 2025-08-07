import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Percent } from "antd/es/progress/style";

const ProductCard = ({ image, title, price,percent,icon, description }) => {
    console.log(image,price,title)
  return (
    <>
    <div className="row">
<div className="">
     <div className="card  shadow-sm cardbg " >

      <div className="card-body">

       <div className="d-flex justify-content-between">
        <div>
         <h5 className="card-title fw-bold text-light">{title}</h5>
        {/* <p className="card-text text-muted">{description}</p> */}
        <p className="text-light fw-bold fs-4">{price} <span className="fs-5 text-warning">+{percent}</span> </p> 
       </div>
       <div>
        <h4 className="bg-warning mt-3 rounded p-2">{icon}</h4>
       </div>
       </div>
      </div>
    </div>
</div>

</div>
</>
  );
};

export default ProductCard;

