import type { Module } from './moduleTypes';

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: 'Learn about dynamic memory allocation techniques.',
    image: '/pointer.webp',
    content: (
      <>
        <p>Content for Dynamic Memory Allocation module.</p>
        <img src="/pointer.webp" alt="Dynamic Memory Allocation" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'alg',
    title: 'Algorithm Analysis',
    intro: 'Understand how to analyze algorithms.',
    image: '/alg_analysis.webp',
    content: (
      <>
        <p>Content for Algorithm Analysis module.</p>
        <video src="/alg_analysis.mp4" controls style={{ width: '300px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Analysis_of_algorithms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: 'Explore recursion and recurrence relations.',
    image: '/recursion.webp',
    content: (
      <>
        <p>Content for Recursion module.</p>
        <img src="/recursion.webp" alt="Recursion" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Recursion_(computer_science)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'linkedlist',
    title: 'Linked Lists',
    intro: 'Learn about linked lists and their operations.',
    image: '/linkedlist.webp',
    content: (
      <>
        <p>Content for Linked Lists module.</p>
        <img src="/linkedlist.webp" alt="Linked Lists" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Linked_list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: 'Understand stacks and queues data structures.',
    image: '/stack.webp',
    content: (
      <>
        <p>Content for Stacks and Queues module.</p>
        <img src="/stack.webp" alt="Stacks and Queues" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Tries, Heaps',
    intro: 'Learn about binary search trees, AVL trees, and heaps.',
    image: '/bst.webp',
    content: (
      <>
        <p>Content for Trees module.</p>
        <img src="/bst.webp" alt="Trees" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Binary_search_tree"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sort',
    title: 'Sorting Algorithms',
    intro: 'Explore various sorting algorithms.',
    image: '/mergesort.webp',
    content: (
      <>
        <p>Content for Sorting Algorithms module.</p>
        <img src="/mergesort.webp" alt="Sorting Algorithms" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Sorting_algorithm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: 'Understand hash tables and their applications.',
    image: '/hashtables.webp',
    content: (
      <>
        <p>Content for HashTables module.</p>
        <img src="/hashtables.webp" alt="HashTables" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Hash_table"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'bitwise',
    title: 'Bitwise Operators, Bitmasking, Base Conversion',
    intro: 'Learn about bitwise operations, bitmasking, and base conversion.',
    image: '/binaryconv.webp',
    content: (
      <>
        <p>Content for Bitwise Operators module.</p>
        <img src="/binaryconv.webp" alt="Bitwise Operators" style={{ width: '200px' }} />
        <a
          href="https://en.wikipedia.org/wiki/Bitwise_operation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sum',
    title: 'Summations',
    intro: 'Stay tuned for more modules.',
    image: '/sums.webp',
    content: (
      <>
        <p>Content for Summations module.</p>
        <img src="/sums.webp" alt="Summations" style={{ width: '200px' }} />
        <a href="https://en.wikipedia.org/wiki/Summation" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </>
    ),
    img_position: 'module-right',
  },
];
