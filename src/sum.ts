// sum from 1 to n 
const sum = (n: number): number => {
  if (n < 0) return 0;
  let total = 0;
  for (let num = n; num > 0; num--) {
    total += num;
  }

  return total;
}

export default sum;