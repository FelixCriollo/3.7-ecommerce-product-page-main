import { DescriptionStyle } from "./style/DescriptionStyle"
import Price from "./Price"
import data from "../services/data.js"


export default function Description() {
  return (
    <DescriptionStyle>
      <h3 className="descrip__brsnd">{data.brand}</h3>

      <h2 className="descrip__name">{data.name}</h2>

      <p className="descrip__body">{data.descrip}</p>
      
      <Price />
    </DescriptionStyle>
  )
}
// change carrusel component 