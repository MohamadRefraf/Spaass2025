import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import laptopImg from '../assets/image.png'
import { useState } from 'react';

export default function Home() {

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Mouse",
      desc: "Brand: Lenovo",
      price: 10,
      isInStock: true,
      img: "https://www.compuworld.me/wp-content/uploads/2024/04/Lenovo-400-Wireless-Mouse-768x768.jpg"
    },
    {
      id: 2,
      title: "Laptop",
      desc: "Brand: MSI",
      price: 2000,
      isInStock: false,
      img: laptopImg
    },
    {
      id: 3,
      title: "Camera",
      desc: "Brand: Sony",
      price: 1800,
      isInStock: true,
      img: "https://www.dslr-zone.com/wp-content/uploads/2019/04/1-2-768x768.jpg"
    }
  ]);

  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = showInStock
    ? products.filter(p => p.isInStock)
    : products;

  return (
    <>
      <Header />
      <div>
        <button onClick={() => setShowInStock(prev => !prev)}>
          {showInStock ? "Show All" : "Show In Stock"}
        </button>

        {filteredProducts.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
}