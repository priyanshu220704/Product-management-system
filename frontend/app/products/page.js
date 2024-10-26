import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductForm />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: <span>${product.price}</span></p>
            <p>Quantity: <span>{product.quantity}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
