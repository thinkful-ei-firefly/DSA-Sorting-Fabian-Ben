# DSA Sorting (Fabian/Ben)

## 1. Understanding merge sort

Given the following list of numbers:

> 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

- What is the resulting list that will be sorted after 3 recursive calls to mergesort?

1. Split whole list into two:

- [21, 1, 26, 45, 29, 28, 2, 9], [16, 49, 39, 27, 43, 34, 46, 40]

2. Split left side into two:

- [21, 1, 26, 45], [29, 28, 2, 9]

3. Split left side into two:

- [21, 1], [26, 45]

- What is the resulting list that will be sorted after 16 recursive calls to mergesort?

After 16 calls, the function calls merge() and compares 21 to 1, so the list is [1, 21].

- What are the first 2 lists to be merged?

1. 21 and 1 are merged first to be [1, 21]
2. 26 and 45 are merged next to be [26, 45]

- Which two lists would be merged on the 7th merge?

The 7th time it merges [1, 21, 26, 45] with [2, 9, 28, 29].


## 2. Understanding quicksort

1. Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

- The pivot could have been 17, but could not have been 14
- The pivot could have been either 14 or 17
  - This is correct because right partition in both cases are greater than left partition.
- Neither 14 nor 17 could have been the pivot
- The pivot could have been 14, but could not have been 17

2. Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

- When using the last item on the list as a pivot
  Second partition is [3, 9, 10]

  14, 17, 13, 15, 19, 10, 3, 16, 9,     12
  10, 17, 13, 15, 19, 14, 3, 16, 9,     12
  10, 3, 13, 15, 19, 14, 17, 16, 9,     12
  10, 3, 9, 15, 19, 14, 17, 16, 13,     12
  10, 3, 9, 12, 19, 14, 17, 16, 13,     15

  10, 3,    9
  3, 10,    9
  3, 9,  10


- When using the first item on the list as a pivot
Second partition is [9, 10, 3, 12, 13]
  14,     17, 13, 15, 19, 10, 3, 16, 9, 12
  14      13, 17, 15, 19, 10, 3, 16, 9, 12
  14      13, 17, 15, 19, 10, 3, 16, 9, 12
  14      13, 10, 15, 19, 17, 3, 16, 9, 12
  14      13, 10, 3, 19, 17, 15, 16, 9, 12
  14      13, 10, 3, 9, 17, 15, 16, 19, 12
  14      13, 10, 3, 9, 12, 15, 16, 19, 17

  12      13, 10, 3, 9, 14, 15, 16, 19, 17

  12      13, 10, 3, 9
  12      10, 13, 3, 9
  12      10, 3, 13, 9
  12      10, 3, 9, 13
  9      10, 3, 12, 13
