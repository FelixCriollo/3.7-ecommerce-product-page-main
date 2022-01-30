import { HeaderRightStyle, HeaderLeftStyle} from "./style/HeaderStyle";
import { UserAvatar, CartBuy, HeaderLogo } from "./style/HeaderStyle";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import user from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";

export function HeaderLeft() {
  return (
    <HeaderLeftStyle>
      <HeaderLogo src={logo} alt="logo of website" />
      
      <Nav />
    </HeaderLeftStyle>
  )
}

export function HeaderRight() {
  return (
    <HeaderRightStyle>
      <CartBuy title="cart" background={cart}/>

      <UserAvatar src={user} alt="user avatar" />
    </HeaderRightStyle>
  )
}