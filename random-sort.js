const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function randomSort(array) {
  for (let i = 0; i < array.length; i++) {
    const index = parseInt(Math.random() * array.length - 1);
    swap(array, i, index);
  }

  return array;
}

console.log(randomSort(arr));
