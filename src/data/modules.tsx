import type { Module } from './moduleTypes';
import VideoPlayer from '../components/VideoPlayer';

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: 'Learn about dynamic memory allocation techniques.',
    image: '/pointer.webp',
    content: (
      <>
        <p>Content for Dynamic Memory Allocation module.</p>
        <VideoPlayer url="https://www.youtube.com/embed/vgvR515ORaY" />
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
        <VideoPlayer url="https://www.youtube.com/embed/8hly31xKli0" />
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
        <VideoPlayer url="https://www.youtube.com/embed/Mv9NEXX1VHc" />
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
        <VideoPlayer url="https://www.youtube.com/embed/NobHlGUjV3g" />
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
        <VideoPlayer url="https://www.youtube.com/embed/zwb3GmNAtFk" />
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
        <VideoPlayer url="https://www.youtube.com/embed/5cU1ILGy6dM" />
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
        <VideoPlayer url="https://www.youtube.com/embed/SHcPqUe2GZM" />
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
        <VideoPlayer url="https://www.youtube.com/embed/2Ti5yvumFTU" />
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
        <VideoPlayer url="https://www.youtube.com/embed/1cG2jv2A3gU" />
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
        <VideoPlayer url="https://www.youtube.com/embed/3C1j4M4jG74" />
        <a href="https://en.wikipedia.org/wiki/Summation" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </>
    ),
    img_position: 'module-right',
  },
];
