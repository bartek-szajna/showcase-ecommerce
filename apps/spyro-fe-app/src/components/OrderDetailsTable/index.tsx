import {
  MarginLine,
  GridContainer,
  TableWrapper,
  BottomText,
} from './styles';
import CheckoutButton from '../CheckoutButton/styles';

const OrderDetailsTable = ({
  cell1,
  cell2,
  cell3,
  cell4,
  bottomText,
  buttonFunction,
}) => {
  return (
    <>
      <TableWrapper>
        <h1>Summary</h1>
        <MarginLine />
        <GridContainer>
          <div>{cell1}</div>
          <div>{cell2}</div>
          <div>{cell3}</div>
          <div>{cell4}</div>
        </GridContainer>
        <MarginLine />
        <BottomText>{bottomText}</BottomText>
        {/* <ButtonWrapper>
          <StandardButton
            width='400px'
            onClick={() => {
              buttonFunction();
            }}
          >
            Purchase products
          </StandardButton>
        </ButtonWrapper> */}
        <CheckoutButton
          onClick={() => {buttonFunction()}}
        >
          <span>Checkout</span>
        </CheckoutButton>
      </TableWrapper>
    </>
  );
};

export default OrderDetailsTable;
