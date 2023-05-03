import React from "react";

const Home = () => {
  return (
    <div>
      <img
        className="add_to_cart"
        src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
        alt="cart"
      />
      <h1>Home Container</h1>
      <div className="cart_wrapper">
        <img
          className="img_item"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/iphone_14_pro-sixteen_nine.jpg?size=1200:675"
          alt="mobile"
        />

        <div className="text_wrapper item">
          <span>Iphone</span>
          <span>Price: $1000</span>
        </div>

        <button className="btn_wrapper item">Add To Cart</button>
      </div>
    </div>
  );
};

export default Home;
