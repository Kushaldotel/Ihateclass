function calculateArithmeticMean(a, b, callback) {
  const ans = callback(a, b);
  return ans;
}

function sum(a, b, c) {
  return a + b + c;
}

function sub(a, b) {
  return a - b;
}

const value = calculateArithmeticMean(2, 3, sum);
console.log(value);