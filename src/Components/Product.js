import { AiFillStar } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { addToCart} from "../Redux/CartAction"
import { connect } from "react-redux";

function Product(props) {
  let addToCart = props.addToCart;
  return (
    <section className="product">
      <div className="img-container">
        <img className="product-img" src={props.img} alt={props.title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{props.title}</h3>
        <section className="product-reviews">
          <AiFillStar className="rating-start" /> <AiFillStar className="rating-start" /> <AiFillStar className="rating-start" /> <AiFillStar className="rating-start" />
          <span className="total-reviews">{props.reviews}</span>
        </section>
      </div>
      <section className="product-price">
        <div className="price">
          <del>{props.prevPrice}</del>${props.newPrice}
        </div>
        <div className="btn-add">
          <Button
            variant="dark"
            size="sm" onClick={(e) => addToCart(e, props,props.id)}>Add To Cart</Button>
        </div>
      </section>
    </section>
  )
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
  };
};

export default connect(null, mapDispatchtoProps)(Product);
