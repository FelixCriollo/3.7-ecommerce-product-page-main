import { CartModalStyle } from "./style/CartModalStyle";

export default function CartModal({modalState}) {
  return (
    <CartModalStyle mState={modalState}>
      <h3 className="cart__title">Cart</h3>
      {
        true 
          ? <p className="cart__empty">You cart is empty.</p>
          : <div className="cart__items"></div>
      }
    </CartModalStyle>
  )
}

