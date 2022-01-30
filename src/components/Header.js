import { HeaderStyle } from "./style/HeaderStyle";
import { UserAvatar, CartBuy, HeaderLogo } from "./style/HeaderStyle";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import user from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";


export default function Header() {
  return (
    <HeaderStyle>
      <HeaderLogo src={logo} alt="logo of website" />
      
      <Nav />
      
      <CartBuy title="cart" background={cart}/>

      <UserAvatar src={user} alt="user avatar" />
    </HeaderStyle>
  )
}