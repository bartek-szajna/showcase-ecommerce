import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import {
  ComponentWrapper,
  Title,
  GridContainer,
  TopContainer,
  Error,
} from './styles';
import { Loader } from '../../styles';

const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        let response:any = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        response = await response.json();
        setProducts(response);
        setLoader(false);
      } catch (e) {
        setError(true);
      }
    };

    fetchCategoryProducts();

  }, []);

  return (
    <>
      <ComponentWrapper>
        {loader ? (
          <Loader />
        ) : (
          <>
            <TopContainer>
              <Title>{id}
                <p>{products.length + " products"}</p>
              </Title>
            </TopContainer>
            {error ? (
              <Error>Something went wrong, try again later!</Error>
            ) : (
              <>
                <GridContainer>
                  {products?.map((item) => {
                    return (
                      <Link to={`/product/${item.id}`} key={item.id}>
                        <ProductCard
                          key={item.id}
                          image={item?.image}
                          price={item?.price}
                          name={item?.title}
                        />
                      </Link>
                    );
                  })}
                </GridContainer>
              </>
            )}
          </>
        )}
      </ComponentWrapper>
    </>
  );
};

export default CategoryPage;
