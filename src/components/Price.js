import { PriceStyle } from "./style/PriceStyle";
import Units from "./Units";
import useCart from "../hooks/useCart";

export default function Price() {
  const { price, discount } = useCart();

  return (
    <PriceStyle discount={price.discount} amount={price.amount}>
      <div className="price">
        <h3 className="price__amount">${price.amount}.00</h3>
        
        <span className="price__discount">
          {price.discount}%
        </span>
      </div>
       
      <Units amount={price.amount} />
    </PriceStyle>
  )
}