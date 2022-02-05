import { useState } from "react";
import { HeaderStyle, CartBuy } from "./style/HeaderStyle";
import CartModal from "./CartModal";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import user from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";


export default function Header() {
  const [modal, setModal] = useState(true);

  const showModal = () => setModal(!modal)

  return (
    <HeaderStyle>
      <img className="header__logo" src={logo} alt="logo of website" />
      
      <Nav />
      
      <CartBuy title="cart" background={cart} onClick={() => showModal()}/>
      <CartModal item={0} modalState={modal}/>

      <img className="user__avatar" src={user} alt="user avatar"/>
    </HeaderStyle>
  )
}