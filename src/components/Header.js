import React from "react";

const Header = (props) => {
  return (
    <div>
      <span className="total_items">{props?.data?.length}</span>
      <img
        className="add_to_cart"
        src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
        alt="cart"
      />
    </div>
  );
};

export default Header;
