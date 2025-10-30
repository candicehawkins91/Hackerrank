function simpleArraySum(ar) {
  const result = ar.reduce((sum, acc) => {
    return sum + acc;
  }, 0);
  return result;
}

simpleArraySum([2, 3, 4, 5, 6, 7]);
