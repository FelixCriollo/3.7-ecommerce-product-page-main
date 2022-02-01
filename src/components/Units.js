import { UnitsStyle } from "./style/UnitsStyle";
import cart from "../images/icon-cart - btn.svg"

export default function Units() {
  return (
    <UnitsStyle>
      <div className="units">
        <span className="units__value">0</span>
      </div>

      <button className="units__add">
        <img src={cart} alt="cart" />
        Add to cart
      </button>
    </UnitsStyle>
  )
}
