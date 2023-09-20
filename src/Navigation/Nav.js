import "./Nav.css"
import { AiOutlineShopping, AiOutlineUserAdd, AiFillShop } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Nav(props) {
  let cart = props.cart;
  const [cartCount, setCartCount] = useState(0);
  useEffect(()=>{
    let cartCount = 0;
    cart.forEach((item) =>{
      cartCount += Number(item.qty);
    });
    setCartCount(cartCount);
  },[cart]);
  return (
    <nav>
      <div className="nav-container">
        <label>
          <div className="header">
            <NavLink to="/"> <AiFillShop className="header-icon"/> </NavLink>
          </div>
          <input type="text" className="search-input" placeholder="Enter your search" onChange={props.searchByProduct}/>
        </label>

      </div>
      <div className="profile-container">
        <NavLink to="/cart">
          <AiOutlineShopping className="nav-icons" /> 
        </NavLink>
        <p>({cartCount})</p>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.rCart.cart
  };
};

export default connect(mapStateToProps)(Nav);