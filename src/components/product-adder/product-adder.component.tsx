import React, {FormEvent} from 'react';

import {Button, TextField} from '@mui/material';

import './product-adder.style.css';

export interface Product {
  id: number;
  name: string;
  description: string;
}

interface ProductAdderProps {
  onProductAdd: (product: Product) => void
}

function ProductAdder({onProductAdd}: ProductAdderProps) {
  const onProductSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const product: Product = {id: Date.now(), name, description};
    onProductAdd(product);
    form.reset();
    document.getElementById('name')?.focus();
  };

  return (
    <form className="product-add-form" onSubmit={onProductSubmit}>
      <TextField id="name" name="name" label="Product" variant="outlined" />
      <TextField id="description" name="description" label="Description" variant="outlined" />
      <Button variant="outlined" type="submit">Add</Button>
    </form>
  );
}

export default ProductAdder;
