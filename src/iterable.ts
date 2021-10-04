const printArray = <T>(arr: Iterable<T>) => {
  for (let i of arr) {
    console.log(i);
  }
}

printArray([1, 2, 3]);
console.log('next is');
printArray('hello');