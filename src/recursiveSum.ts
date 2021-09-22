const recursiveSum = (n: number): number => {
  if (n < 1) return 0;
  
  return n + recursiveSum(n-1)
}

export default recursiveSum;