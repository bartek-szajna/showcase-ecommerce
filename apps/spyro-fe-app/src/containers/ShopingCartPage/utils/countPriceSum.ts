const countPriceSum = (arr) => {
  const sumArr = arr.map((item: {price: number, count: number}) => Number(item.price) * Number(item.count));
  let sum = sumArr.reduce((a: number, b: number) => a + b, 0);
  sum = Number.parseFloat(sum).toFixed(2);
  sum = Number(sum);
  return sum;
};

export default countPriceSum;
