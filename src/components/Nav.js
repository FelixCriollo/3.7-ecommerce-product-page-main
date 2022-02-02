import { NavStyle, NavButton, NavList } from "./style/NavStyle";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";

export default function Nav() {

  const mobileNav = (state) => {
    const $nav = document.querySelector(".nav-container");
    
    state === "show" 
      ? $nav.classList.add("nav-show") 
      : $nav.classList.remove("nav-show");
  }

  return (
    <NavStyle>
      <NavButton title="open menu" background={menu} onClick={() => mobileNav("show")}/>

      <div className="nav-container">
        <NavButton title="close menu" background={close} onClick={() => mobileNav()}/>
        
        <NavList>
          <li><a href="/">Collections</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </NavList>
      </div>
    </NavStyle>
  )
}