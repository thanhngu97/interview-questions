// function s(a, b) {
//   var x = 0;
//   for (var i = a; i <= b; i++) {
//     x = x + i;
//   }
//   return x;
// }

// function calc(a, b, c) {
//   const res = s(a, b);
//   if (c == true) {
//     res = res * 2;
//   }
//   return res;
// }

const accumulateSum = function (from, to, isDouble = false) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }

  if (isDouble) return sum * 2;

  return sum;
};

console.log(accumulateSum(5, 10, true));
