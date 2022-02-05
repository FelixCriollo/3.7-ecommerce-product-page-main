import { DescriptionStyle } from "./style/DescriptionStyle"
import Price from "./Price"

export default function Description() {
  const data = {
    brand: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
  }

  return (
    <DescriptionStyle>
      <h3 className="descrip__brsnd">{data.brand}</h3>

      <h2 className="descrip__name">{data.name}</h2>

      <p className="descrip__body">{data.description}</p>
      
      <Price />
    </DescriptionStyle>
  )
}