"use client";
import { useState } from 'react';
import ProductForm from './components/ProductForm';

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">
      <h1>Product Management System</h1>
      <ProductForm onRefresh={handleRefresh} />
    </div>
  );
}
