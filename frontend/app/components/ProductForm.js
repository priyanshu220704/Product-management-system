"use client"; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ onRefresh }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [onRefresh]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, description, price: parseFloat(price), quantity: parseInt(quantity) };

    if (editing) {
      await axios.put(`http://localhost:5000/api/products/${currentProductId}`, newProduct);
    } else {
      await axios.post('http://localhost:5000/api/products', newProduct);
    }

    resetForm();
    fetchProducts(); // Refresh the product list
    onRefresh(); // Call the refresh handler
  };

  const handleEdit = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
    setCurrentProductId(product.id);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts(); // Refresh the product list
    onRefresh(); // Call the refresh handler
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setCurrentProductId(null);
    setEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">{editing ? 'Update Product' : 'Add Product'}</button>
      </form>

      <h2>Product List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: <span>${product.price}</span></p>
            <p>Quantity: <span>{product.quantity}</span></p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
