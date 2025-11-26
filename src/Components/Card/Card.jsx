import { Navigate } from 'react-router-dom';
import './Card.css'
import { getCart } from '../../Utils/cartUtils';
import { useState } from 'react';
function Card(props){
const {image,title,desc,price,isInStock}= props;

const handleClick=()=>{
  Navigate(`/Productdetail/${id}`,{state:{image,title,desc,price,isInStock}})
}
  const product = useState([
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
const [items,setItems]=useState([]);
const saveCart = getCart();//[{id:1,quantity:2}]
const merged = saveCart.map(cartItem => {
  //search item details from product array
  product.find(p => p.id === cartItem.id);
return {
  ...product,quantity:cartItem.quantity
}
});
setItems(merged);

    return (
      <div className="card" onClick={handleClick}>
        <img className="card-img"src={image} alt={"Product Image"} />
            <h2 className="card-title">{title}</h2>
            <p className="card-desc"> {desc}</p>
            <p className="card-price">{price} $</p>
            <button className='card-btn'
            onClick={(e) => {e.stopPropagation();addToCart(id);}}>Add to Cart</button>           
            <p> { isInStock ? "In Stock" : "Out Of Stock"}</p>        
      </div>
    )
}
export default Card;