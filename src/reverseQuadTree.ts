// p194 reverse quad tree 
const reverse = (it: Iterator<string>) => {
  const head: string = it.next().value;
  if (head === 'b' || head === 'w') 
    return head;
  const upperLeft: string = reverse(it);
  const upperRight: string = reverse(it);
  const lowerLeft: string = reverse(it);
  const lowerRight: string = reverse(it);

  return 'x' + lowerLeft + lowerRight + upperLeft + upperRight;
}

// Q. Iterator vs Iterable?? 