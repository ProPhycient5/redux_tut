import React from "react";

const Home = (props) => {
  console.log("Home_props", props);
  return (
    <div>
      <span className="total_items">{props?.data?.length}</span>
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

        <div className="text_wrapper">
          <span>Iphone</span>
          <span>Price: $1000</span>
        </div>

        <button
          className="btn_wrapper"
          onClick={() =>
            props.addToCartHandler({ name: "I-Phone 20", price: "$ 2000" })
          }
        >
          Add To Cart
        </button>
        <button
          className="btn_wrapper remove"
          onClick={() => props.removeFromCartHandler()}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
