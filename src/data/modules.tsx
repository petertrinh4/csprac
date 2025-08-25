import type { Module } from './moduleTypes';
import VideoPlayer from '../components/VideoPlayer';
import Background from '../components/Background';

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: '',
    image: '',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/Dn87Bna23TQ" title="Module Videos" />
        <VideoPlayer url="https://www.youtube.com/embed/R0qIYWo8igs" title="" />
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'alg',
    title: 'Algorithm Analysis',
    intro: '',
    image: '/bigo.gif',
    content: (
      <>
        <Background />
        <VideoPlayer
          url="https://www.youtube.com/embed/vgvR515ORaY"
          title="Big O Notation and Algorithm Analysis"
        />
        <VideoPlayer
          url="https://www.youtube.com/embed/xGYsEqe9Vl0"
          title="Best, Worst, and Average Case"
        />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Analysis_of_algorithms"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Analysis of Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Asymptotic Analysis
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/algorithm_analysis.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Algorithm Analysis
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/algorithm-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Algorithm Analysis
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/analysis-of-algorithms"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Analysis of Algorithms
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: '',
    image: '/hanoi.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/STWnc6ZY2fw" title="Recursion Explained" />
        <VideoPlayer url="https://www.youtube.com/embed/63422umKubg" title="Recurrence Relations" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Recursion_(computer_science)"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Recursion (Computer Science)
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/recursion/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Recursion
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/recursion.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Recursion
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/c-programming/c-recursion"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Recursion
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/recursion-in-c"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Recursion in C
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'linkedlist',
    title: 'Linked Lists',
    intro: '',
    image: '/linkedlist.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/R9PTBwOzceo?list=PLBlnK6fEyqRi3-lvwLGzcaquOs5OBTCww" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Linked_list"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Linked Lists
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/data-structures-linked-list/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Linked List Data Structure
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Linked List Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/linked-list"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Linked List
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/data-structure-linked-list"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Linked List
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: '',
    image: '/queue.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/A3ZUpyrnCbM" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Stacks
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/stack-data-structure/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Stack Data Structure
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Stack Algorithm
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/stack"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Stack
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/data-structure-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Stack
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Tries, Heaps',
    intro: '',
    image: '/bfs.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/Gt2yBZAhsGM" />
        <VideoPlayer url="https://www.youtube.com/embed/jDM6_TnYIqE" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Binary_search_tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Binary Search Trees
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Binary Search Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Binary Search Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/binary-search-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Binary Search Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/binary-search-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Binary Search Tree
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sort',
    title: 'Sorting Algorithms',
    intro: '',
    image: '/bubble.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/l7-f9gS8VOs" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Sorting_algorithm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Sorting Algorithm
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/sorting-algorithms/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Sorting Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Sorting Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/sorting-algorithm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Sorting Algorithm
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/sorting-algorithms"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Sorting Algorithms
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-right',
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: '',
    image: '/hashtable.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/2Ti5yvumFTU" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Hash_table"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Hash Table
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/hashing-data-structure/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Hashing Data Structure
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Hash Data Structure
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/hash-table"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Hash Table
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/data-structure-hash-table"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Hash Table
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-left',
  },
  {
    id: 'bitwise',
    title: 'Bitwise Operators, Bitmasking, Base Conversion',
    intro: '',
    image: '/bitwise.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/ffPOA7UUDAs" />
        <VideoPlayer url="https://www.youtube.com/embed/9dPMb_znOwk" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Bitwise_operation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Bitwise Operation
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Bitwise Operators in C/C++
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/bitwise-operators-in-c"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Bitwise Operators in C
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/c-programming/c-bitwise-operators"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Bitwise Operators
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/bitwise-operators-in-c"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Bitwise Operators in C
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
  },
  {
    id: 'sum',
    title: 'Summations',
    intro: '',
    image: '/sum.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/XJkIaw2e1Pw" />
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Summation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Summation
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/summation-in-mathematics/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Summation in Mathematics
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/summation-in-mathematics"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Summation in Mathematics
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/math/summation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Summation
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/summation-in-mathematics"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Summation in Mathematics
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-right',
  },
];
