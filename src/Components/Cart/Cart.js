import { connect } from "react-redux";
import { useState } from "react";
import { adjustQuantity ,deleteFromCart } from "../../Redux/CartAction";
import { BsTrash } from "react-icons/bs";
function Cart(props) {

    let adjustQuantity = props.adjustQuantity;
    let deleteFromCart = props.deleteFromCart;

    const onChangeQuantity = (event) => {
        event.preventDefault();
        let btn = event.currentTarget;
        if (Number(btn.value) > btn.max) {
            alert("Maximum is "+ btn.max +" products");
        }
        if (Number(btn.value) > btn.max) {
        btn.value = btn.max;
        }
        adjustQuantity(props.product.id, Number(btn.value));
    }

    return (
        <tr>
            <td>
                <img
                    src={props.product.img}
                    alt="product"
                />
            </td>
            <td>{props.product.title}</td>
            <td>{props.product.newPrice}$</td>
            <td>
                <input
                    type="number"
                    id="qty"
                    name="qty"
                    min="1"
                    max={props.product.maxQuantity}
                    step="1"
                    value={props.product.qty}
                    onChange={onChangeQuantity}
                ></input>
            </td>
            <td id="subTotal">{props.product.qty * props.product.newPrice}$</td>
            <td>
                <div variant="dark"
                    size="sm"
                    className="ms-2"
                    onClick={(e) => deleteFromCart(e, props.product.id)}>
                    <BsTrash />
                </div>

            </td>
        </tr >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
        deleteFromCart: (e, id) => dispatch(deleteFromCart(e, id)),
    };
};

export default connect(null, mapDispatchToProps)(Cart);