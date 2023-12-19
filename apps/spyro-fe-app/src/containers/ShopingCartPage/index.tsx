import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import OrderDetailsTable from '../../components/OrderDetailsTable/index';
import { CartQuantityContext } from '../../components/UserDataContext/UserDataContext';

import {
  Title,
  ProductsContainer,
  ComponentWrapper,
  Container,
  ProductCardOverlay,
  Info,
} from './styles';

import deleteIcons from '../../assets/icons/deleteIcons.svg';
import deleteFromCart from './utils/deleteFromCart';
import countPriceSum from './utils/countPriceSum';
import countCountSum from './utils/countCountSum';
import calculateDeliveryPrice, { cartObjects } from './utils/calculateDeliveryPrice';

const ShopingCartPage = () => {
  const [myCart, setMyCart] = useState<cartObjects[]>([]);
  const [orderValue, setOrderValue] = useState<number>(0);
  const [deliveryValue, setDeliveryValue] = useState<number>(19);
  const [totalValue, setTotalValue] = useState<number>(orderValue + deliveryValue);
  const navigate = useNavigate();
  const { setCartQuantityHandler } = useContext(
    CartQuantityContext
  );

  if (JSON.parse(localStorage.getItem('userCart') || "[]") === null) {
    localStorage.setItem('userCart', JSON.stringify([]));
  }

  useEffect(() => {
    setMyCart(JSON.parse(localStorage.getItem('userCart') || "[]"));
    setOrderValue(countPriceSum(myCart));
    setTotalValue(orderValue + deliveryValue);
    setDeliveryValue(calculateDeliveryPrice(myCart));

  }, [myCart.length, orderValue, deliveryValue, totalValue]);

  if (myCart === null || myCart.length === 0) {
    return (
      <ComponentWrapper>
        <Title>Your cart is empty</Title>
        <Info>
          Search for products you like, add them to your cart and store them
          here safely
        </Info>
      </ComponentWrapper>
    );
  }

  return (
    <ComponentWrapper>
      <Title>
        Cart
        <Info>{`${countCountSum(myCart)} saved products`}</Info>
      </Title>
      <Container>
        <ProductsContainer>
          {myCart.map((item) => {
            return (
              <div key={item.id} style={{ position: 'relative' }}>
                <ProductCardOverlay
                  onClick={() => {
                    setMyCart(deleteFromCart(item.id, myCart));
                    setCartQuantityHandler(
                      countCountSum(
                        JSON.parse(localStorage.getItem('userCart') || "[]"))
                    );
                  }}
                >
                  <img
                    src={deleteIcons}
                    alt={`Delete ${item?.title} from cart`}
                  />
                </ProductCardOverlay>
                <Link to={`/product/${item.id}`} key={item.id}>
                  <ProductCard
                    image={item?.image}
                    name={`${item?.count}x ${item?.title}`}
                    price={`Total: ${item?.count * item?.price}`}
                  />
                </Link>
              </div>
            );
          })}
        </ProductsContainer>
        <OrderDetailsTable
          cell1='Order value:'
          cell2={`${orderValue} $`}
          cell3='Delivery:'
          cell4={`${deliveryValue} $`}
          bottomText={`Total: ${totalValue} $`}
          buttonFunction={() => {
            setMyCart([]);
            localStorage.setItem('userCart', JSON.stringify([]));
            setCartQuantityHandler(0);
            navigate("/profile");
          }}
        />
      </Container>
    </ComponentWrapper>
  );
};

export default ShopingCartPage;
