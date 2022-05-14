import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';

import {Product} from '../../product-adder/product-adder.component';

import './product-card.style.css';

interface ProductCardProps extends Product {
  onRemove?: (id: number) => void;
}

const ProductCard = ({id, name, description, onRemove}: ProductCardProps) => {
  return (
    <Card sx={{minWidth: 275, maxWidth: 300}}>
      <CardContent>
        <Typography variant='h5' component='div'>{name}</Typography>
        <Typography color='text.secondary'>{description.length > 0 ? description : '-'}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => onRemove && onRemove(id)}>Remove</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
