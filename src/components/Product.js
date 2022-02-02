import { ProductStyle, MoveBtn } from "./style/ProductStyle";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

export default function Product() {
  return (
    <ProductStyle>
      <div className="main-image"> 
        <MoveBtn background={next} position={"left"} type="button"/>

        <div className="main-image-container">
          {/* Hacer un componente con las imagenes */}
          <img className="main-image__img" src={require("../images/image-product-1.jpg")} alt=""/>
        </div>

        <MoveBtn background={previous} position={"right"} type="button"/>
      </div>

      <div className="thumbnail">

      </div>
    </ProductStyle>
  )
}