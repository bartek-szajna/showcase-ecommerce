import { Link } from 'react-router-dom';
import { CategoryCardWrapper, Name, CategoryImage } from './styles';

function determineImageUrl(img:string){
  if(img === "electronics"){
    return "src/assets/electronics.jpg"
  } else if(img === "jewelery"){
    return "src/assets/jewelery.jpg"
  } else if(img === "men's clothing"){
    return "src/assets/men_clothing.jpg"
  } else {
    return "src/assets/women_clothing.jpg"
  }
}

interface CategoryCardProps {
  name: string;
  image: string;
  to: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, to }) => {
  return (
    <>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <CategoryCardWrapper>
          <CategoryImage src={determineImageUrl(image)} alt={name} />
          <Name>{name}</Name>
        </CategoryCardWrapper>
      </Link>
    </>
  );
};

export default CategoryCard;
