import { CartModalStyle } from "./style/CartModalStyle";
import useCart from "../hooks/useCart";

export default function CartModal({ modalState }) {
  const { number, name, amount, image } = useCart();

  return (
    <CartModalStyle mState={modalState}>
      <h3 className="cart__title">Cart</h3>
      {
        number === 0 
          ? <p className="cart__empty">You cart is empty.</p>
          : <div className="cart__items">
              <img src={image} />
            </div>
      }
    </CartModalStyle>
  )
}

