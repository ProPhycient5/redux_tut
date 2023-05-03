import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({
  data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
