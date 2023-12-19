import { useEffect, useState, useContext } from 'react';
import {
  ProductDetailsPageWrapper,
  ProductDetailsWrapper,
  ProductImage,
  ButtonCountWrapper,
} from './styles';
import addToCart from './utils/addToCart';
import AddToCartButton from '../../components/AddToCartButton/styles';
import CartQuantitySelect from '../../components/CartQuantitySelect/index';
import { Loader } from '../../styles';
import { CartQuantityContext } from '../../components/UserDataContext/UserDataContext';
import { useParams } from 'react-router-dom';
import cartIcons from '../../assets/icons/cartIcons.svg';

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState(1);
  const { id } = useParams();
  
  const { cartQuantity, setCartQuantityHandler } = useContext(CartQuantityContext);

  useEffect(() => {
    const getData = async () => {
      let  response:any = await fetch(`https://fakestoreapi.com/products/${id}`)
      response = await response.json();
      setProductDetails(response);
      setLoading(false);
    };

    getData();
  }, []);


  const [productDetails, setProductDetails] = useState<{[key: string]: any;} | null>(null);
  const selectChangeHandler = (change: number) => {
    setSelectValue(change);
  };

  return (
    <>
      {loading ? (
        <ProductDetailsPageWrapper>
          <Loader />
        </ProductDetailsPageWrapper>
      ) : (
        <ProductDetailsPageWrapper>
          <ProductImage
              src={productDetails?.image || '#'}
              alt={productDetails?.title || '#'}
          />
          <ProductDetailsWrapper>
            <h1>{productDetails?.title}</h1>
            <p>{`${productDetails?.rating.rate} (${productDetails?.rating.count} opinions)`}</p>
            <p>{productDetails?.description}</p>
            
            <h2>{`${productDetails?.price}$`}</h2>

            <ButtonCountWrapper>
              <AddToCartButton
                onClick={() => {
                  addToCart(productDetails, selectValue);
                  setCartQuantityHandler(cartQuantity + selectValue);
                  setSelectValue(1);
                }}
              >
                <img src={cartIcons} alt='Shopping Cart Icon' />
                <span>Add to Cart</span>
              </AddToCartButton>
              
              <CartQuantitySelect
                selectChangeHandler={selectChangeHandler}
                selectValue={selectValue}
              />
            </ButtonCountWrapper>
          </ProductDetailsWrapper>
        </ProductDetailsPageWrapper>
      )}
    </>
  );
};

export default ProductPage;
