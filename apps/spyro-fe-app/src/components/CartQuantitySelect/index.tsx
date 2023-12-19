import { Select } from './styles';

interface CartQuantitySelectProps {
  selectChangeHandler: (change: number) => void;
  selectValue: number;
}

const CartQuantitySelect: React.FC<CartQuantitySelectProps> = ({ selectChangeHandler, selectValue }) => {
  const optionsList = [1,2,3,4,5,6,7,8,9,10]
  
  return (
    <Select value={selectValue} onChange={(e)=>{
      selectChangeHandler(Number(e.target.value));
    }}>
      {optionsList.map( option => {
        return <option key={option} value={option}>{option}</option>
      })}
    </Select>
  );
};

export default CartQuantitySelect;
