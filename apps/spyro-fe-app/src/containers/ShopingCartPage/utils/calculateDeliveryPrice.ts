export interface cartObjects {
  category: string;
  count: number;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  }
}

const calculateDeliveryPrice = (arr: cartObjects[]) => {
  const sumArr = arr.map((item) => item.count);
  const sum = sumArr.reduce((a, b) => a + b, 0);

  if (sum <= 3) {
    return 19;
  }
  if (sum > 3 && sum <= 5) {
    return 29;
  }
  if (sum > 5 && sum < 10) {
    return 49;
  }
  else return 79;
};

export default calculateDeliveryPrice;
