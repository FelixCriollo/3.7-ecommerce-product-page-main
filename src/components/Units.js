import { UnitsStyle, UnitsBtn } from "./style/UnitsStyle";
import cart from "../images/icon-cart - btn.svg"
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

export default function Units() {
  return (
    <UnitsStyle action="" name="addCartForm">
      <div className="units">
        <UnitsBtn background={plus} position={"left"} type="button" />

        <input className="units__input" type="number" name="number" value="0" readOnly/>
        
        <UnitsBtn background={minus} position={"right"} type="button" />
      </div>

      <button typeof="submit" className="units__add">
        <img src={cart} alt="cart" />
        Add to cart
      </button>
    </UnitsStyle>
  )
}
