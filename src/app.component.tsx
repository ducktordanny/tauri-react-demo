import React, {useEffect, useState} from 'react';
import {sendNotification} from '@tauri-apps/api/notification';

import ProductAdder, {Product} from './components/product-adder/product-adder.component';
import ShoppingList from './components/shopping-list/shopping-list.component';

import './app.style.css';

function AppComponent() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    let savedProducts = localStorage.getItem('products');
    console.log(savedProducts);
    if (!savedProducts) return;
    savedProducts = JSON.parse(savedProducts);
    if (!Array.isArray(savedProducts)) return;
    setProducts(savedProducts as Array<Product>);
  }, []);

  const addProduct = (product: Product) => {
    if (product.name.length === 0) return;
    localStorage.setItem('products', JSON.stringify([product, ...products]));
    setProducts((current) => [product, ...current]);
  }

  const removeProduct = (id: number) => {
    setProducts(current => {
      const filteredProducts = current.filter(product => product.id !== id);
      localStorage.setItem('products', JSON.stringify(filteredProducts));
      return filteredProducts;
    });
    sendNotification({
      title: 'TauriDemo',
      body: 'An item has been removed',
      icon: './assets/logo.png',
    });
  };

  return (
    <>
      <header>
        <ProductAdder onProductAdd={addProduct} />
      </header>
      <main>
        <ShoppingList list={products} onRemove={removeProduct} />
      </main>
    </>
  );
}

export default AppComponent;
