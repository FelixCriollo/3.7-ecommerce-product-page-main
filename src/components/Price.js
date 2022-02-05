import { PriceStyle } from "./style/PriceStyle";
import Units from "./Units";

export default function Price() {
  const price = {
    amount: 125.00,
    discount: 50
  }

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