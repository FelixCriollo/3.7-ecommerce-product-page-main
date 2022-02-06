import { UnitsStyle, UnitsBtn } from "./style/UnitsStyle";
import cart from "../images/icon-cart - btn.svg"
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

export default function Units({ amount }) {
  const addUnits = (e) => {
    const $input = document.querySelector("input[name='number']");
    
    e.target.classList.contains("plus")
      ? $input.value++
      : $input.value > 0 && $input.value--

  }

  return (
    <UnitsStyle action="" name="addCartForm">
      <div className="units">
        <UnitsBtn 
          className="plus"
          background={plus} 
          position={"right"}
          type="button" 
          onClick={e => addUnits(e)}
        />

        <input className="units__input" type="number" name="number" value="0" readOnly/>
        
        <UnitsBtn 
          className="minus"
          background={minus} 
          position={"left"} 
          type="button" 
          onClick={e => addUnits(e)}
        /> 
      </div>

      <button typeof="submit" className="units__add">
        <img src={cart} alt="cart" />
        Add to cart
      </button>
    </UnitsStyle>
  )
}
