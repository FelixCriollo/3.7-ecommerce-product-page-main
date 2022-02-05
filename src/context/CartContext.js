import { createContext } from "react/cjs/react.production.min";

const CartContext = createContext({
  number: null,
  name: null,
  amount: null,
  img: null,
}); 

export default CartContext;