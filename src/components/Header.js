import { HeaderStyle } from "./style/HeaderStyle";
import { HeaderLeft, HeaderRight } from "./HeaderSides";


export default function Header() {
  return (
    <HeaderStyle>
      <HeaderLeft />
      
      <HeaderRight />
    </HeaderStyle>
  )
}