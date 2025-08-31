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
        <div className="wiki-links-list">
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Memory_management"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Dynamic Memory Allocation
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Dynamic Memory Allocation
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/cprogramming/c_dynamic_memory_allocation.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Dynamic Memory Allocation
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/c-programming/c-dynamic-memory-allocation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Dynamic Memory Allocation
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/dynamic-memory-allocation-in-c"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Dynamic Memory Allocation
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-right',
    quizQuestions: [
      {
        question: 'Which function allocates memory dynamically in C?',
        options: ['malloc', 'printf', 'scanf', 'sizeof'],
        answer: 'malloc',
      },
      {
        question: 'Which function frees dynamically allocated memory?',
        options: ['free', 'delete', 'exit', 'realloc'],
        answer: 'free',
      },
      {
        question: 'Which function changes the size of previously allocated memory?',
        options: ['realloc', 'malloc', 'calloc', 'memset'],
        answer: 'realloc',
      },
      {
        question: 'Which function allocates memory and initializes it to 0?',
        options: ['calloc', 'malloc', 'free', 'memcpy'],
        answer: 'calloc',
      },
      {
        question: 'Dynamic memory allocation occurs at:',
        options: ['runtime', 'compile time', 'link time', 'preprocessor time'],
        answer: 'runtime',
      },
    ],
    flashcards: [
      { front: 'malloc', back: 'Allocates memory dynamically in C.' },
      { front: 'free', back: 'Frees dynamically allocated memory.' },
      { front: 'calloc', back: 'Allocates and initializes memory to zero.' },
      { front: 'realloc', back: 'Changes the size of previously allocated memory.' },
      { front: 'Dynamic Allocation', back: 'Occurs at runtime.' },
    ],
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
    quizQuestions: [
      {
        question: 'What does Big O notation describe?',
        options: ['Best case', 'Worst case', 'Average case', 'All cases'],
        answer: 'Worst case',
      },
      {
        question: 'Which complexity is better for large datasets?',
        options: ['O(n^2)', 'O(n log n)', 'O(2^n)', 'O(n^3)'],
        answer: 'O(n log n)',
      },
      {
        question: 'What is the time complexity of binary search?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        answer: 'O(log n)',
      },
      {
        question: 'What does O(1) represent?',
        options: ['Linear time', 'Constant time', 'Logarithmic time', 'Quadratic time'],
        answer: 'Constant time',
      },
      {
        question: 'Which notation describes upper bound?',
        options: ['Omega (Ω)', 'Theta (Θ)', 'Big O (O)', 'All of the above'],
        answer: 'Big O (O)',
      },
    ],
    flashcards: [
      { front: 'Big O', back: 'Describes the upper bound of an algorithm.' },
      { front: 'O(1)', back: 'Constant time complexity.' },
      { front: 'O(n log n)', back: 'Efficient for large datasets.' },
      { front: 'Worst Case', back: 'Big O notation describes this.' },
      { front: 'Theta', back: 'Describes tight bound.' },
    ],
  },
  {
    id: 'rec',
    title: 'Recursion & Recurrence Relations',
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
                href="https://en.wikipedia.org/wiki/Recurrence_relation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Recurrence Relations
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
                href="https://www.geeksforgeeks.org/recurrence-relation/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Recurrence Relations
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
                href="https://www.tutorialspoint.com/recurrence_relation.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Recurrence Relations
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
                href="https://www.programiz.com/dsa/recurrence-relation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Recurrence Relations
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
            <li>
              <a
                href="https://www.javatpoint.com/recurrence-relation"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Recurrence Relations
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
    quizQuestions: [
      {
        question: 'What is recursion?',
        options: ['A loop', 'A function calling itself', 'A variable', 'A data structure'],
        answer: 'A function calling itself',
      },
      {
        question: 'Which problem is best solved using recursion?',
        options: ['Sorting', 'Factorial', 'Searching', 'All of the above'],
        answer: 'Factorial',
      },
      {
        question: 'What is the base case in recursion?',
        options: [
          'The recursive call',
          'The stopping condition',
          'The function definition',
          'The loop',
        ],
        answer: 'The stopping condition',
      },
      {
        question: 'Which of the following is NOT a recursive problem?',
        options: ['Tower of Hanoi', 'Fibonacci', 'Binary Search', 'Bubble Sort'],
        answer: 'Bubble Sort',
      },
      {
        question: 'Recurrence relations are used to:',
        options: [
          'Describe recursive algorithms',
          'Sort arrays',
          'Allocate memory',
          'None of the above',
        ],
        answer: 'Describe recursive algorithms',
      },
    ],
    flashcards: [
      { front: 'Recursion', back: 'A function calling itself.' },
      { front: 'Base Case', back: 'The stopping condition in recursion.' },
      { front: 'Recurrence Relation', back: 'Describes recursive algorithms.' },
      { front: 'Factorial', back: 'Common recursive problem.' },
      { front: 'Tower of Hanoi', back: 'Solved using recursion.' },
    ],
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
        <VideoPlayer
          url="https://www.youtube.com/embed/N6dOwBde7-M"
          title="Learn Linked Lists in 13 minutes (Bro Code)"
        />
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
                href="https://en.wikipedia.org/wiki/Doubly_linked_list"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Doubly Linked Lists
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Circular_linked_list"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Circular Linked Lists
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
                href="https://www.geeksforgeeks.org/doubly-linked-list/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Doubly Linked List
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/circular-linked-list/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Circular Linked List
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
    quizQuestions: [
      {
        question: 'What is a linked list?',
        options: [
          'A collection of arrays',
          'A sequence of nodes',
          'A type of tree',
          'A sorting algorithm',
        ],
        answer: 'A sequence of nodes',
      },
      {
        question: 'Which pointer does the last node of a singly linked list contain?',
        options: ['Head', 'Tail', 'Null', 'Random'],
        answer: 'Null',
      },
      {
        question: 'Which operation is fastest in a linked list?',
        options: ['Insertion', 'Searching', 'Sorting', 'Accessing by index'],
        answer: 'Insertion',
      },
      {
        question: 'Which type of linked list allows traversal in both directions?',
        options: ['Singly', 'Doubly', 'Circular', 'None'],
        answer: 'Doubly',
      },
      {
        question: 'What is the time complexity to access the nth element in a singly linked list?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(n)',
      },
    ],
    flashcards: [
      { front: 'Linked List', back: 'A sequence of nodes.' },
      { front: 'Node', back: 'Contains data and pointer(s).' },
      { front: 'Singly Linked List', back: 'Nodes point to next node only.' },
      { front: 'Doubly Linked List', back: 'Nodes point to next and previous nodes.' },
      { front: 'Null', back: 'Last node points to null.' },
    ],
  },
  {
    id: 'stacks',
    title: 'Stacks & Queues',
    intro: '',
    image: '/queue.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/A3ZUpyrnCbM" />
        <VideoPlayer url="https://www.youtube.com/embed/okr-XE8yTO8" title="Queue Data Structure" />
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
                href="https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Queues
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
                href="https://www.geeksforgeeks.org/queue-data-structure/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Queue Data Structure
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
                href="https://www.tutorialspoint.com/data_structures_algorithms/queue_algorithm.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Queue Algorithm
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
                href="https://www.programiz.com/dsa/queue"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Queue
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
            <li>
              <a
                href="https://www.javatpoint.com/data-structure-queue"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Queue
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-left',
    quizQuestions: [
      {
        question: 'What is the main principle of a stack?',
        options: ['FIFO', 'LIFO', 'LILO', 'FILO'],
        answer: 'LIFO',
      },
      {
        question: 'Which operation removes the top element from a stack?',
        options: ['Push', 'Pop', 'Peek', 'Insert'],
        answer: 'Pop',
      },
      {
        question: 'Which data structure is used for breadth-first search?',
        options: ['Stack', 'Queue', 'Tree', 'Graph'],
        answer: 'Queue',
      },
      {
        question: 'What is the time complexity of push and pop in a stack?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(1)',
      },
      {
        question: 'Which operation returns the front element of a queue without removing it?',
        options: ['Enqueue', 'Dequeue', 'Peek', 'Push'],
        answer: 'Peek',
      },
    ],
    flashcards: [
      { front: 'Stack', back: 'LIFO data structure.' },
      { front: 'Queue', back: 'FIFO data structure.' },
      { front: 'Push', back: 'Adds element to stack.' },
      { front: 'Pop', back: 'Removes element from stack.' },
      { front: 'Enqueue', back: 'Adds element to queue.' },
    ],
  },
  {
    id: 'trees',
    title: 'BST, AVL Tree, Tries, Heaps',
    intro: '',
    image: '/bfs.gif',
    content: (
      <>
        <Background />
        <VideoPlayer
          url="https://www.youtube.com/embed/Gt2yBZAhsGM"
          title="Binary Search Trees (BST)"
        />
        <VideoPlayer url="https://www.youtube.com/embed/jDM6_TnYIqE" title="AVL Trees" />
        <VideoPlayer
          url="https://www.youtube.com/embed/HqPJF2L5h9U"
          title="Heap Data Structure | Introduction to Heaps"
        />
        <VideoPlayer
          url="https://www.youtube.com/embed/zIjfhVPRZCg"
          title="Trie Data Structure Explained"
        />
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
                href="https://en.wikipedia.org/wiki/AVL_tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: AVL Trees
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Trie"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Tries
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Heap_(data_structure)"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Heaps
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
                href="https://www.geeksforgeeks.org/avl-tree-set-1-insertion/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: AVL Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/trie-insert-and-search/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Trie
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/heap-data-structure/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Heap
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
                href="https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: AVL Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/trie_data_structure.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Trie
              </a>
            </li>
            <li>
              <a
                href="https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Heap
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
                href="https://www.programiz.com/dsa/avl-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: AVL Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/trie"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Trie
              </a>
            </li>
            <li>
              <a
                href="https://www.programiz.com/dsa/heap-data-structure"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Heap
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
            <li>
              <a
                href="https://www.javatpoint.com/avl-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: AVL Tree
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/trie-data-structure"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Trie
              </a>
            </li>
            <li>
              <a
                href="https://www.javatpoint.com/heap-data-structure"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Heap
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
    quizQuestions: [
      {
        question: 'What is a binary search tree?',
        options: [
          'A tree with two children',
          'A sorted tree',
          'A tree where left < root < right',
          'A heap',
        ],
        answer: 'A tree where left < root < right',
      },
      {
        question: 'Which tree is self-balancing?',
        options: ['BST', 'AVL', 'Trie', 'Heap'],
        answer: 'AVL',
      },
      {
        question: 'What is the time complexity of search in a balanced BST?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(log n)',
      },
      {
        question: 'Which data structure is used for prefix matching?',
        options: ['Heap', 'Trie', 'BST', 'AVL'],
        answer: 'Trie',
      },
      {
        question: 'Which heap property is true?',
        options: ['Parent < Child', 'Parent > Child', 'Parent = Child', 'No relation'],
        answer: 'Parent < Child',
      },
    ],
    flashcards: [
      { front: 'BST', back: 'Binary Search Tree.' },
      { front: 'AVL', back: 'Self-balancing BST.' },
      { front: 'Trie', back: 'Used for prefix matching.' },
      { front: 'Heap', back: 'Complete binary tree.' },
      { front: 'O(log n)', back: 'Search time in balanced BST.' },
    ],
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
        <VideoPlayer url="https://www.youtube.com/embed/ZZuD6iUe3Pc" title="Merge Sort Explained" />
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
    quizQuestions: [
      {
        question: 'Which sorting algorithm is stable?',
        options: ['Selection Sort', 'Bubble Sort', 'Quick Sort', 'Heap Sort'],
        answer: 'Bubble Sort',
      },
      {
        question: 'What is the time complexity of merge sort?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
        answer: 'O(n log n)',
      },
      {
        question: 'Which algorithm is not comparison-based?',
        options: ['Radix Sort', 'Quick Sort', 'Merge Sort', 'Bubble Sort'],
        answer: 'Radix Sort',
      },
      {
        question: 'Which sort is best for nearly sorted data?',
        options: ['Insertion Sort', 'Selection Sort', 'Heap Sort', 'Quick Sort'],
        answer: 'Insertion Sort',
      },
      {
        question: 'Which sorting algorithm has worst-case O(n^2)?',
        options: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Heap Sort'],
        answer: 'Bubble Sort',
      },
    ],
    flashcards: [
      { front: 'Bubble Sort', back: 'Stable sorting algorithm.' },
      { front: 'Merge Sort', back: 'O(n log n) time complexity.' },
      { front: 'Radix Sort', back: 'Not comparison-based.' },
      { front: 'Insertion Sort', back: 'Best for nearly sorted data.' },
      { front: 'Selection Sort', back: 'Simple but inefficient.' },
    ],
  },
  {
    id: 'hash',
    title: 'Hash Tables',
    intro: '',
    image: '/hashtable.gif',
    content: (
      <>
        <Background />
        <VideoPlayer url="https://www.youtube.com/embed/2Ti5yvumFTU" />
        <VideoPlayer
          url="https://www.youtube.com/embed/shs0KM3wKv8"
          title="Hash Tables and Hash Functions Explained"
        />
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
    quizQuestions: [
      {
        question: 'What is a hash table?',
        options: ['A tree', 'A mapping of keys to values', 'A sorting algorithm', 'A stack'],
        answer: 'A mapping of keys to values',
      },
      {
        question: 'What is a hash function?',
        options: [
          'A function that sorts',
          'A function that maps keys to indices',
          'A function that searches',
          'A function that deletes',
        ],
        answer: 'A function that maps keys to indices',
      },
      {
        question: 'What is collision in hash tables?',
        options: ['Two keys map to same index', 'Key not found', 'Table is full', 'Key is deleted'],
        answer: 'Two keys map to same index',
      },
      {
        question: 'Which method resolves collisions?',
        options: ['Chaining', 'Sorting', 'Searching', 'Stacking'],
        answer: 'Chaining',
      },
      {
        question: 'What is the average time complexity for search in a hash table?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(1)',
      },
    ],
    flashcards: [
      { front: 'Hash Table', back: 'Maps keys to values.' },
      { front: 'Hash Function', back: 'Maps keys to indices.' },
      { front: 'Collision', back: 'Two keys map to same index.' },
      { front: 'Chaining', back: 'Method to resolve collisions.' },
      { front: 'O(1)', back: 'Average search time.' },
    ],
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
                href="https://en.wikipedia.org/wiki/Bitmask"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Bitmasking
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Binary_number"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Wikipedia: Binary Numbers
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
                href="https://www.geeksforgeeks.org/bitmasking-technique/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Bitmasking Technique
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/binary-representation-of-a-number/"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                GFG: Binary Representation
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
                href="https://www.tutorialspoint.com/binary_numbers.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                TutorialsPoint: Binary Numbers
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
                href="https://www.programiz.com/c-programming/binary-number-system"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Programiz: Binary Number System
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
            <li>
              <a
                href="https://www.javatpoint.com/binary-number-system"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                JavaTpoint: Binary Number System
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
    img_position: 'module-center',
    quizQuestions: [
      {
        question: 'What does the & operator do?',
        options: ['OR', 'AND', 'XOR', 'NOT'],
        answer: 'AND',
      },
      {
        question: 'Which operator shifts bits to the left?',
        options: ['>>', '<<', '&', '|'],
        answer: '<<',
      },
      {
        question: 'What is bitmasking used for?',
        options: ['Sorting', 'Setting/clearing bits', 'Searching', 'Looping'],
        answer: 'Setting/clearing bits',
      },
      {
        question: 'What is the binary representation of 5?',
        options: ['101', '110', '111', '100'],
        answer: '101',
      },
      {
        question: 'Which base is used in binary?',
        options: ['2', '8', '10', '16'],
        answer: '2',
      },
    ],
    flashcards: [
      { front: 'AND (&)', back: 'Bitwise AND operator.' },
      { front: 'OR (|)', back: 'Bitwise OR operator.' },
      { front: 'XOR (^)', back: 'Bitwise XOR operator.' },
      { front: '<<', back: 'Left shift operator.' },
      { front: 'Bitmasking', back: 'Setting/clearing bits.' },
    ],
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
        <VideoPlayer
          url="https://www.youtube.com/embed/QnvywVuY7qY"
          title="Summation Notation | Sigma Notation | Don't Memorise"
        />
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
    quizQuestions: [
      {
        question: 'What is a summation?',
        options: ['A product', 'A sum of terms', 'A division', 'A subtraction'],
        answer: 'A sum of terms',
      },
      {
        question: 'Which symbol is used for summation?',
        options: ['∑', 'π', '√', '∞'],
        answer: '∑',
      },
      {
        question: 'What is the sum of the first n natural numbers?',
        options: ['n(n+1)/2', 'n^2', '2n', 'n+1'],
        answer: 'n(n+1)/2',
      },
      {
        question: 'What is the sum of a geometric series?',
        options: ['a/(1-r)', 'a*r', 'a+n', 'a^n'],
        answer: 'a/(1-r)',
      },
      {
        question: 'Which summation is infinite?',
        options: ['Finite sum', 'Infinite series', 'Product', 'None'],
        answer: 'Infinite series',
      },
    ],
    flashcards: [
      { front: 'Summation (∑)', back: 'Sum of terms.' },
      { front: 'n(n+1)/2', back: 'Sum of first n natural numbers.' },
      { front: 'Geometric Series', back: 'Sum: a/(1-r).' },
      { front: 'Infinite Series', back: 'Sum with infinite terms.' },
      { front: 'Finite Sum', back: 'Sum with finite terms.' },
    ],
  },
];
