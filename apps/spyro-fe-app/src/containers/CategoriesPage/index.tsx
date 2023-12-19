import { useEffect, useState } from 'react';
import { Loader } from '../../styles';
import CategoryCard from '../../components/CategoryCard';
import { ComponentWrapper, Title, CategoriesContainer } from './styles';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let response:any = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        response = await response.json();
        setCategories(response);
        setLoader(false);
      } catch (err) {
        setError('Something went wrong, try again later!');
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <ComponentWrapper>
        <Title>Product categories</Title>
        {error === '' &&
          (loader ? (
            <Loader />
          ) : (
            <CategoriesContainer>
              {categories?.map((item: string) => (
                <CategoryCard
                  key={item}
                  name={item}
                  to={`/category/${item}`}
                  image={item}
                />
              ))}
            </CategoriesContainer>
          ))}
        {error !== '' && <div>{error}</div>}
      </ComponentWrapper>
    </>
  );
};

export default CategoriesPage;
