import { DescriptionStyle } from "./style/DescriptionStyle"
import Price from "./Price"
import useCart from "../hooks/useCart"


export default function Description() {
  const {descrip, name, brand} = useCart();

  return (
    <DescriptionStyle>
      <h3 className="descrip__brsnd">{brand}</h3>

      <h2 className="descrip__name">{name}</h2>

      <p className="descrip__body">{descrip}</p>
      
      <Price />
    </DescriptionStyle>
  )
}
// change carrusel component 