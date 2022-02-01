import { HeaderStyle, CartBuy } from "./style/HeaderStyle";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import user from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";


export default function Header() {
  return (
    <HeaderStyle>
      <img className="header__logo" src={logo} alt="logo of website" />
      
      <Nav />
      
      <CartBuy title="cart" background={cart}/>

      <img className="user__avatar" src={user} alt="user avatar" />
    </HeaderStyle>
  )
}