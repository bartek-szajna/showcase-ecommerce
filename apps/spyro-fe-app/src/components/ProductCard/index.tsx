import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductDetailsWrapper,
  PriceWrapper,
  ProductImage
} from './styles';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard:React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <ProductCardWrapper>
      <ProductImageWrapper>
        <ProductImage src={image || '#'} alt={name || '#'} />
      </ProductImageWrapper>
      <ProductDetailsWrapper>
        <div>{name}</div>
        <PriceWrapper>{`${price}$`}</PriceWrapper>
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;
