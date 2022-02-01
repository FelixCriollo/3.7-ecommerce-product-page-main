import { PriceStyle } from "./style/PriceStyle";
import Units from "./Units";
import data from "../services/data.js"

export default function Price() {
  return (
    <PriceStyle discount={data.price.discount} amount={data.price.amount}>
      <div className="price">
        <h3 className="price__amount">${data.price.amount}.00</h3>
        
        <span className="price__discount">
          {data.price.discount}%
        </span>
      </div>
       
      <Units />
    </PriceStyle>
  )
}