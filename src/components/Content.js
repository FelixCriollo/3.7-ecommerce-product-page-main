import { ContentStyle } from "./style/ContentStyle"
import Description from "./Description"
import Product from "./Product"

export default function Content() {
  return (
    <ContentStyle>
      <Product />

      <Description />
    </ContentStyle>
  )
}