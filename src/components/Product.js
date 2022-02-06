import { ProductStyle, MoveBtn } from "./style/ProductStyle";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

export default function Product() {

  const btnActive = (e) => {
    const $container = document.querySelector(".main-image-container");

    e.target.classList.contains("left") 
      ? $container.scrollTop -= $container.offsetHeight
      : $container.scrollTop += $container.offsetHeight
  }

  return (
    <ProductStyle>
      <div className="main-image"> 
        <MoveBtn  
          background={previous} 
          position={"left"} 
          type="button" 
          className="left"
          onClick={e => btnActive(e)}
        />

        <div className="main-image-container">
          <img className="main-image__img" src={require("../images/image-product-1.jpg")} alt=""/>
          <img className="main-image__img" src={require("../images/image-product-2.jpg")} alt=""/>
          <img className="main-image__img" src={require("../images/image-product-3.jpg")} alt=""/>
          <img className="main-image__img" src={require("../images/image-product-4.jpg")} alt=""/>
        </div>

        <MoveBtn 
          background={next} 
          position={"right"} 
          type="button" 
          className="right"
          onClick={e => btnActive(e)}
        />
      </div>

      <div className="thumbnail"> 
        <img className="thumbnail__img" 
          src={require("../images/image-product-1-thumbnail.jpg")} alt=""
        />
        <img className="thumbnail__img" 
          src={require("../images/image-product-2-thumbnail.jpg")} alt=""
        />
        <img className="thumbnail__img" 
          src={require("../images/image-product-3-thumbnail.jpg")} alt=""
        />
        <img className="thumbnail__img" 
          src={require("../images/image-product-4-thumbnail.jpg")} alt=""
        />
      </div>
    </ProductStyle>
  )
}