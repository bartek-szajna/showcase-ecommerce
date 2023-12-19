import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { Loader } from '../../styles';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  Container,
  ComponentWrapper,
  Title,
} from './styles';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      let response:any = await fetch(
        'https://fakestoreapi.com/products?sort=desc&limit=10'
      );
      response = await response.json();
      setProducts(response);
      setLoader(false);
    };

    fetchAPI();
  }, []);
  return (
    <ComponentWrapper>
      <Title>Most recent products</Title>
      <Container>
        {loader ? (
          <Loader />
        ) : (
          <ProductsContainer>
            {products?.map((item) => {
              return (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <ProductCard
                    key={item.name}
                    image={item?.image}
                    name={item?.title}
                    price={item?.price}
                  />
                </Link>
              );
            })}
          </ProductsContainer>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default HomePage;
