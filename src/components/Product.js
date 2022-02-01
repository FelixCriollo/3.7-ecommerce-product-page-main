import { ProductStyle } from "./style/ProductStyle";

export default function Product() {
  return (
    <ProductStyle>
      <div className="main-image">

        <div className="main-image-container">
          {/* Hacer un componente con las imagenes */}
          <img className="main-image__img" src={require("../images/image-product-1.jpg")} alt=""/>
        </div>

      </div>

      <div className="thumbnail">

      </div>
    </ProductStyle>
  )
}