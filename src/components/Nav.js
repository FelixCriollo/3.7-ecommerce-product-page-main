import { NavStyle, NavButton, NavList } from "./style/NavStyle";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";

export default function Nav() {
  return (
    <NavStyle>
      <NavButton title="open menu" background={menu} />

      <div className="nav-disabled">
        <NavButton title="close menu" background={close} />
        
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