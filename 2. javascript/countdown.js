function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n); // insert number 0th position
    return arr;
  }
}
console.log(countup(5)); // [5, 4, 3, 2, 1]