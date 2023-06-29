function removeDuplicates(arr) {
  const unique = [];

  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

export { removeDuplicates };
