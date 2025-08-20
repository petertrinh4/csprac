import type { Module } from './moduleTypes';
import VideoPlayer from '../components/VideoPlayer';

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: '',
    image: '/pointer.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/vgvR515ORaY" />
        <a
          href="https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Dynamic Memory Allocation module.
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'alg',
    title: 'Algorithm Analysis',
    intro: '',
    image: '/alg_analysis.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/8hly31xKli0" />
        <a
          href="https://en.wikipedia.org/wiki/Analysis_of_algorithms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Algorithm Analysis module.
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: '',
    image: '/recursion.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/Mv9NEXX1VHc" />
        <a
          href="https://en.wikipedia.org/wiki/Recursion_(computer_science)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Recursion module.
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'linkedlist',
    title: 'Linked Lists',
    intro: '',
    image: '/linkedlist.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/NobHlGUjV3g" />
        <a
          href="https://en.wikipedia.org/wiki/Linked_list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Linked Lists module.
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: '',
    image: '/stack.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/zwb3GmNAtFk" />
        <a
          href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Stacks and Queues module.
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Tries, Heaps',
    intro: '',
    image: '/bst.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/5cU1ILGy6dM" />
        <a
          href="https://en.wikipedia.org/wiki/Binary_search_tree"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Trees module.
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sort',
    title: 'Sorting Algorithms',
    intro: '',
    image: '/mergesort.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/SHcPqUe2GZM" />
        <a
          href="https://en.wikipedia.org/wiki/Sorting_algorithm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Sorting Algorithms module.
        </a>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: '',
    image: '/hashtables.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/2Ti5yvumFTU" />
        <a
          href="https://en.wikipedia.org/wiki/Hash_table"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for HashTables module.
        </a>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'bitwise',
    title: 'Bitwise Operators, Bitmasking, Base Conversion',
    intro: '',
    image: '/binaryconv.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/1cG2jv2A3gU" />
        <a
          href="https://en.wikipedia.org/wiki/Bitwise_operation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Content for Bitwise Operators module.
        </a>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sum',
    title: 'Summations',
    intro: '',
    image: '/sums.webp',
    content: (
      <>
        <VideoPlayer url="https://www.youtube.com/embed/3C1j4M4jG74" />
        <a href="https://en.wikipedia.org/wiki/Summation" target="_blank" rel="noopener noreferrer">
          Content for Summations module.
        </a>
      </>
    ),
    img_position: 'module-right',
  },
];
