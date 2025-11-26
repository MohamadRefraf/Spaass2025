import { useLocation } from 'react-router-dom';

function Productdetail() {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    return (
      <div>
        <h2>Product not found</h2>
        <p>Please open this page by clicking a product from the Home page.</p>
      </div>
    );
  }

  const { id, isInStock, img, title, desc, price } = state;
  return (
    <div>
      <h1>{title}</h1>
      <img
        src={img}
        alt={title}
        style={{ width: '300px', borderRadius: '10px', marginBottom: '20px' }}
      />
      <p>{desc}</p>
      <p>Price: ${price}</p>
      <p>{isInStock ? 'In Stock ' : 'Out of Stock'}</p>
    </div>
  );
}

export default Productdetail;
