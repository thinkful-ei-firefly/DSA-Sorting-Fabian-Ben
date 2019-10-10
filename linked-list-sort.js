const LinkedList = require('./LinkedList');

function mSort(list) {
  // list.displayList();
  const size = list.size();
  if (size <= 1) {
    return list;
  }

  //              0         1                 2         3
  // this.head >> val: 10, nxt: 10 >> val: 2 ptr: null >> null || item3 >> item4

  const middle = Math.floor(size / 2);

  let left = new LinkedList();
  let right = new LinkedList();

  let curr = list.head;

  while (curr !== list.findNthElement(middle)) {
    left.insertLast(curr.value);
    curr = curr.next;
  }

  curr = list.findNthElement(middle);
  while (curr !== null) {
    right.insertLast(curr.value);
    curr = curr.next;
  }

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, list);
}

function merge(left, right) {
  const merged = new LinkedList();
  let currL = left.head;
  let currR = right.head;

  while (currL && currR) {
    if (currL.value < currR.value) {
      merged.insertLast(currL.value);
      currL = currL.next;
    } else {
      merged.insertLast(currR.value);
      currR = currR.next;
    }
  }

  while (currL) {
    merged.insertLast(currL.value);
    currL = currL.next;
  }

  while (currR) {
    merged.insertLast(currR.value);
    currR = currR.next;
  }

  return merged;
}

function makeLL() {
  const LL = new LinkedList();
  const inserts = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ];
  inserts.forEach(item => LL.insertLast(item));
  return LL;
}

const unsorted = makeLL();
const sorted = mSort(unsorted);
sorted.displayList();
