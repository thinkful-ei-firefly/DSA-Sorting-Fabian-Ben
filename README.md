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
