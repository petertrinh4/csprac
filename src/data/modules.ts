export type Module = {
  id: string;
  title: string;
  intro: string;
  image: string;
  content: string;
  img_position: string;
};

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: 'Learn about dynamic memory allocation techniques.',
    image: '/pointer.webp',
    content: 'Content for Dynamic Memory Allocation module.',
    img_position: 'module-right',
  },
  {
    id: 'alg',
    title: 'Algorithm Analysis',
    intro: 'Understand how to analyze algorithms.',
    image: '/alg_analysis.webp',
    content: 'Content for Algorithm Analysis module.',
    img_position: 'module-left',
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: 'Explore recursion and recurrence relations.',
    image: '/recursion.webp',
    content: 'Content for Recursion module.',
    img_position: 'module-center',
  },
  {
    id: 'linkedlist',
    title: 'Linked Lists',
    intro: 'Learn about linked lists and their operations.',
    image: '/linkedlist.webp',
    content: 'Content for Linked Lists module.',
    img_position: 'module-right',
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: 'Understand stacks and queues data structures.',
    image: '/stack.webp',
    content: 'Content for Stacks and Queues module.',
    img_position: 'module-left',
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Tries, Heaps',
    intro: 'Learn about binary search trees, AVL trees, and heaps.',
    image: '/bst.webp',
    content: 'Content for Trees module.',
    img_position: 'module-center',
  },
  {
    id: 'sort',
    title: 'Sorting Algorithms',
    intro: 'Explore various sorting algorithms.',
    image: '/mergesort.webp',
    content: 'Content for Sorting Algorithms module.',
    img_position: 'module-right',
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: 'Understand hash tables and their applications.',
    image: '/hashtables.webp',
    content: 'Content for HashTables module.',
    img_position: 'module-left',
  },
  {
    id: 'bitwise',
    title: 'Bitwise Operators, Bitmasking, Base Conversion',
    intro: 'Learn about bitwise operations, bitmasking, and base conversion.',
    image: '/binaryconv.webp',
    content: 'Content for Bitwise Operators module.',
    img_position: 'module-center',
  },
  {
    id: 'sum',
    title: 'Summations',
    intro: 'Stay tuned for more modules.',
    image: '/sums.webp',
    content: 'Content for Summations module.',
    img_position: 'module-right',
  },
];
