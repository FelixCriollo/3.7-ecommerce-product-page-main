import { ContentStyle } from "./style/ContentStyle"
import Carousel from "./Carousel"
import Description from "./Description"

export default function Content() {
  return (
    <ContentStyle>
      <Carousel />

      <Description />
    </ContentStyle>
  )
}