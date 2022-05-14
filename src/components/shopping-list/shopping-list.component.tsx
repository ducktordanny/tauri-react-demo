import {Box} from '@mui/material';

import {Product} from '../product-adder/product-adder.component';
import ProductCard from './product-card/product-card.component';

import './shopping-list.style.css';

interface ShoppingListProps {
  list: Array<Product>;
  onRemove: (id: number) => void;
}

const ShoppingList = ({list, onRemove}: ShoppingListProps) => (
  <Box>
    {list.map((product, index) => <ProductCard key={product.id} {...product} onRemove={onRemove} />)}
  </Box>
);

export default ShoppingList;
