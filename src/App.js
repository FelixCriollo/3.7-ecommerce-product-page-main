import Header from './components/Header';
import Content from './components/Content';
import CartContext from './context/CartContext';
import './App.css';
import img1 from './images/image-product-1.jpg'

function App() {
  const cartContent = {
    number: 0,
    price: {
      amount: 125.00,
      discount: 50
    },
    brand: "Snaker Company",
    name: "Fall Limited Edition Sneakers",
    descrip: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    img: img1
  }

  return (
    <div className="App">
      <CartContext.Provider value={cartContent}>    
        <Header />
        <Content />
      </CartContext.Provider>
    </div>
  );
}

export default App;
