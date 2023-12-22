const countCountSum = (arr) => {
  if(arr.length === 0){
    return 0;
  }
  const sumArr = arr.map((item) => item.count);
  const sum = sumArr.reduce((a, b) => a + b, 0);
  return sum;
};

export default countCountSum;
