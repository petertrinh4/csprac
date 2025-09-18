import type { Module } from './moduleTypes';
import VideoPlayer from '../components/VideoPlayer';
import Background from '../components/Background';
import UsefulLinks from '../components/UsefulLinks';

export const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: '',
    image: '',
    content: (
      <>
        <Background />
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/Dn87Bna23TQ" title="Module Videos" />
        </div>
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/R0qIYWo8igs" title="" />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Dynamic_memory_allocation',
              text: 'Wikipedia: Dynamic Memory Allocation',
            },
            {
              href: 'https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/',
              text: 'GFG: Dynamic Memory Allocation',
            },
            {
              href: 'https://www.tutorialspoint.com/cprogramming/c_dynamic_memory_allocation.htm',
              text: 'TutorialsPoint: Dynamic Memory Allocation',
            },
            {
              href: 'https://www.programiz.com/c-programming/c-dynamic-memory-allocation',
              text: 'Programiz: Dynamic Memory Allocation',
            },
            {
              href: 'https://www.javatpoint.com/dynamic-memory-allocation',
              text: 'JavaTpoint: Dynamic Memory Allocation',
            },
          ]}
        />
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
      {
        question: 'What is the difference between malloc and calloc?',
        options: [
          'calloc initializes memory to zero',
          'malloc is faster',
          'calloc is faster',
          'malloc initializes memory to zero',
        ],
        answer: 'calloc initializes memory to zero',
      },
      {
        question: 'What happens if you free memory twice?',
        options: [
          'Undefined behavior',
          'Memory is freed again',
          'No effect',
          'Program runs faster',
        ],
        answer: 'Undefined behavior',
      },
    ],
    flashcards: [
      { front: 'malloc', back: 'Allocates memory dynamically in C.' },
      { front: 'free', back: 'Frees dynamically allocated memory.' },
      { front: 'calloc', back: 'Allocates and initializes memory to zero.' },
      { front: 'realloc', back: 'Changes the size of previously allocated memory.' },
      { front: 'Dynamic Allocation', back: 'Occurs at runtime.' },
      { front: 'realloc', back: 'Resizes previously allocated memory.' },
      { front: 'calloc vs malloc', back: 'calloc initializes memory to zero, malloc does not.' },
      { front: 'Double Free', back: 'Undefined behavior caused by freeing memory twice.' },
      { front: 'Memory Leak', back: 'Occurs when dynamically allocated memory is not freed.' },
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
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/vgvR515ORaY"
            title="Big O Notation and Algorithm Analysis"
          />
        </div>
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/xGYsEqe9Vl0"
            title="Best, Worst, and Average Case"
          />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Analysis_of_algorithms',
              text: 'Wikipedia: Analysis of Algorithms',
            },
            {
              href: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/',
              text: 'GFG: Asymptotic Analysis',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/algorithm_analysis.htm',
              text: 'TutorialsPoint: Algorithm Analysis',
            },
            {
              href: 'https://www.programiz.com/dsa/algorithm-analysis',
              text: 'Programiz: Algorithm Analysis',
            },
            {
              href: 'https://www.javatpoint.com/analysis-of-algorithms',
              text: 'JavaTpoint: Analysis of Algorithms',
            },
          ]}
        />
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
      {
        question: 'What is the time complexity of linear search?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'],
        answer: 'O(n)',
      },
      {
        question: 'What does Omega (Ω) notation represent?',
        options: ['Best case', 'Worst case', 'Average case', 'All cases'],
        answer: 'Best case',
      },
    ],
    flashcards: [
      { front: 'Big O', back: 'Describes the upper bound of an algorithm.' },
      { front: 'O(1)', back: 'Constant time complexity.' },
      { front: 'O(n log n)', back: 'Efficient for large datasets.' },
      { front: 'Worst Case', back: 'Big O notation describes this.' },
      { front: 'Theta', back: 'Describes tight bound.' },
      { front: 'Best Case', back: 'Describes the best possible scenario for an algorithm.' },
      { front: 'Average Case', back: 'Describes the expected scenario for an algorithm.' },
      { front: 'Linear Search', back: 'Searches each element one by one.' },
      { front: 'Omega (Ω)', back: 'Represents the best case complexity.' },
    ],
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: '',
    image: '/hanoi.gif',
    content: (
      <>
        <Background />
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/STWnc6ZY2fw"
            title="Recursion Explained"
          />
        </div>
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/63422umKubg"
            title="Recurrence Relations"
          />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Recursion_(computer_science)',
              text: 'Wikipedia: Recursion (Computer Science)',
            },
            { href: 'https://www.geeksforgeeks.org/recursion/', text: 'GFG: Recursion' },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/recursion.htm',
              text: 'TutorialsPoint: Recursion',
            },
            {
              href: 'https://www.programiz.com/c-programming/c-recursion',
              text: 'Programiz: Recursion',
            },
            {
              href: 'https://www.javatpoint.com/recursion-in-c',
              text: 'JavaTpoint: Recursion in C',
            },
          ]}
        />
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
      {
        question: 'What is tail recursion?',
        options: [
          'Recursion where the recursive call is the last operation',
          'Recursion with no base case',
          'Recursion with multiple calls',
          'Recursion with loops',
        ],
        answer: 'Recursion where the recursive call is the last operation',
      },
      {
        question: 'What is the time complexity of the Tower of Hanoi problem?',
        options: ['O(2^n)', 'O(n)', 'O(n^2)', 'O(log n)'],
        answer: 'O(2^n)',
      },
    ],
    flashcards: [
      { front: 'Recursion', back: 'A function calling itself.' },
      { front: 'Base Case', back: 'The stopping condition in recursion.' },
      { front: 'Recurrence Relation', back: 'Describes recursive algorithms.' },
      { front: 'Factorial', back: 'Common recursive problem.' },
      { front: 'Tower of Hanoi', back: 'Solved using recursion.' },
      { front: 'Recursive Function', back: 'A function that calls itself.' },
      { front: 'Tower of Hanoi', back: 'Classic problem solved using recursion.' },
      { front: 'Tail Recursion', back: 'Recursive call is the last operation in the function.' },
      { front: 'Tower of Hanoi', back: 'A classic recursive problem with O(2^n) complexity.' },
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
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/R9PTBwOzceo?list=PLBlnK6fEyqRi3-lvwLGzcaquOs5OBTCww" />
        </div>
        <UsefulLinks
          links={[
            { href: 'https://en.wikipedia.org/wiki/Linked_list', text: 'Wikipedia: Linked Lists' },
            {
              href: 'https://www.geeksforgeeks.org/data-structures-linked-list/',
              text: 'GFG: Linked List Data Structure',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm',
              text: 'TutorialsPoint: Linked List Algorithms',
            },
            { href: 'https://www.programiz.com/dsa/linked-list', text: 'Programiz: Linked List' },
            {
              href: 'https://www.javatpoint.com/data-structure-linked-list',
              text: 'JavaTpoint: Linked List',
            },
          ]}
        />
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
      {
        question: 'What is the advantage of a circular linked list?',
        options: ['Efficient traversal', 'Easier to implement', 'Uses less memory', 'No advantage'],
        answer: 'Efficient traversal',
      },
      {
        question: 'What is the time complexity of inserting at the head of a singly linked list?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(1)',
      },
    ],
    flashcards: [
      { front: 'Linked List', back: 'A sequence of nodes.' },
      { front: 'Node', back: 'Contains data and pointer(s).' },
      { front: 'Singly Linked List', back: 'Nodes point to next node only.' },
      { front: 'Doubly Linked List', back: 'Nodes point to next and previous nodes.' },
      { front: 'Null', back: 'Last node points to null.' },
      { front: 'Circular Linked List', back: 'Last node points to the first node.' },
      { front: 'Traversal', back: 'Process of visiting all nodes in a linked list.' },
      { front: 'Circular Linked List', back: 'Last node points to the first node.' },
      { front: 'Insertion at Head', back: 'Takes O(1) time in a singly linked list.' },
    ],
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: '',
    image: '/queue.gif',
    content: (
      <>
        <Background />
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/A3ZUpyrnCbM" />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Stack_(abstract_data_type)',
              text: 'Wikipedia: Stacks',
            },
            {
              href: 'https://www.geeksforgeeks.org/stack-data-structure/',
              text: 'GFG: Stack Data Structure',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm',
              text: 'TutorialsPoint: Stack Algorithm',
            },
            { href: 'https://www.programiz.com/dsa/stack', text: 'Programiz: Stack' },
            { href: 'https://www.javatpoint.com/data-structure-stack', text: 'JavaTpoint: Stack' },
          ]}
        />
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
      {
        question: 'What is the main principle of a queue?',
        options: ['FIFO', 'LIFO', 'LILO', 'FILO'],
        answer: 'FIFO',
      },
      {
        question: 'What is the time complexity of enqueue and dequeue in a queue?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        answer: 'O(1)',
      },
    ],
    flashcards: [
      { front: 'Stack', back: 'LIFO data structure.' },
      { front: 'Queue', back: 'FIFO data structure.' },
      { front: 'Push', back: 'Adds element to stack.' },
      { front: 'Pop', back: 'Removes element from stack.' },
      { front: 'Enqueue', back: 'Adds element to queue.' },
      { front: 'Peek', back: 'Returns the top element without removing it.' },
      { front: 'FIFO', back: 'First In, First Out principle used in queues.' },
      { front: 'FIFO', back: 'First In, First Out principle used in queues.' },
      { front: 'Dequeue', back: 'Removes element from the front of the queue.' },
    ],
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Tries, Heaps',
    intro: '',
    image: '/bfs.gif',
    content: (
      <>
        <Background />
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/Gt2yBZAhsGM" />
        </div>
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/jDM6_TnYIqE" />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Binary_search_tree',
              text: 'Wikipedia: Binary Search Trees',
            },
            {
              href: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/',
              text: 'GFG: Binary Search Tree',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm',
              text: 'TutorialsPoint: Binary Search Tree',
            },
            {
              href: 'https://www.programiz.com/dsa/binary-search-tree',
              text: 'Programiz: Binary Search Tree',
            },
            {
              href: 'https://www.javatpoint.com/binary-search-tree',
              text: 'JavaTpoint: Binary Search Tree',
            },
          ]}
        />
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
      {
        question: 'What is the height of a tree with a single node?',
        options: ['0', '1', '2', 'Undefined'],
        answer: '0',
      },
      {
        question: 'What is the time complexity of inserting into a max heap?',
        options: ['O(log n)', 'O(n)', 'O(1)', 'O(n^2)'],
        answer: 'O(log n)',
      },
    ],
    flashcards: [
      { front: 'BST', back: 'Binary Search Tree.' },
      { front: 'AVL', back: 'Self-balancing BST.' },
      { front: 'Trie', back: 'Used for prefix matching.' },
      { front: 'Heap', back: 'Complete binary tree.' },
      { front: 'O(log n)', back: 'Search time in balanced BST.' },
      {
        front: 'Complete Binary Tree',
        back: 'All levels are fully filled except possibly the last.',
      },
      { front: 'Heap Property', back: 'Defines the relationship between parent and child nodes.' },
      {
        front: 'Height of Tree',
        back: 'The number of edges on the longest path from root to a leaf.',
      },
      {
        front: 'Max Heap',
        back: 'A complete binary tree where parent nodes are greater than child nodes.',
      },
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
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/l7-f9gS8VOs" />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Sorting_algorithm',
              text: 'Wikipedia: Sorting Algorithm',
            },
            {
              href: 'https://www.geeksforgeeks.org/sorting-algorithms/',
              text: 'GFG: Sorting Algorithms',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm',
              text: 'TutorialsPoint: Sorting Algorithms',
            },
            {
              href: 'https://www.programiz.com/dsa/sorting-algorithm',
              text: 'Programiz: Sorting Algorithm',
            },
            {
              href: 'https://www.javatpoint.com/sorting-algorithms',
              text: 'JavaTpoint: Sorting Algorithms',
            },
          ]}
        />
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
      {
        question: 'Which sorting algorithm is in-place?',
        options: ['Merge Sort', 'Quick Sort', 'Radix Sort', 'Counting Sort'],
        answer: 'Quick Sort',
      },
      {
        question: 'What is the best-case time complexity of bubble sort?',
        options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'],
        answer: 'O(n)',
      },
    ],
    flashcards: [
      { front: 'Bubble Sort', back: 'Stable sorting algorithm.' },
      { front: 'Merge Sort', back: 'O(n log n) time complexity.' },
      { front: 'Radix Sort', back: 'Not comparison-based.' },
      { front: 'Insertion Sort', back: 'Best for nearly sorted data.' },
      { front: 'Selection Sort', back: 'Simple but inefficient.' },
      {
        front: 'Quick Sort',
        back: 'Divide-and-conquer algorithm with average O(n log n) complexity.',
      },
      { front: 'Heap Sort', back: 'Comparison-based sorting algorithm using a binary heap.' },
      { front: 'In-place Sorting', back: 'Sorting algorithm that requires no extra space.' },
      { front: 'Bubble Sort Best Case', back: 'O(n) when the array is already sorted.' },
    ],
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: '',
    image: '/hashtable.gif',
    content: (
      <>
        <Background />
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/2Ti5yvumFTU" />
        </div>
        <UsefulLinks
          links={[
            { href: 'https://en.wikipedia.org/wiki/Hash_table', text: 'Wikipedia: Hash Table' },
            {
              href: 'https://www.geeksforgeeks.org/hashing-data-structure/',
              text: 'GFG: Hashing Data Structure',
            },
            {
              href: 'https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm',
              text: 'TutorialsPoint: Hash Data Structure',
            },
            { href: 'https://www.programiz.com/dsa/hash-table', text: 'Programiz: Hash Table' },
            {
              href: 'https://www.javatpoint.com/data-structure-hash-table',
              text: 'JavaTpoint: Hash Table',
            },
          ]}
        />
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
      {
        question: 'What is the load factor in a hash table?',
        options: [
          'Ratio of elements to table size',
          'Number of collisions',
          'Hash function efficiency',
          'Table size',
        ],
        answer: 'Ratio of elements to table size',
      },
      {
        question: 'What is open addressing?',
        options: [
          'Collision resolution without chaining',
          'Hash function optimization',
          'Dynamic resizing',
          'Key-value mapping',
        ],
        answer: 'Collision resolution without chaining',
      },
    ],
    flashcards: [
      { front: 'Hash Table', back: 'Maps keys to values.' },
      { front: 'Hash Function', back: 'Maps keys to indices.' },
      { front: 'Collision', back: 'Two keys map to same index.' },
      { front: 'Chaining', back: 'Method to resolve collisions.' },
      { front: 'O(1)', back: 'Average search time.' },
      { front: 'Load Factor', back: 'Ratio of number of elements to the table size.' },
      { front: 'Open Addressing', back: 'Collision resolution method without chaining.' },
      { front: 'Load Factor', back: 'Ratio of number of elements to the table size.' },
      { front: 'Open Addressing', back: 'Collision resolution method without chaining.' },
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
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/ffPOA7UUDAs" />
        </div>
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/9dPMb_znOwk" />
        </div>
        <UsefulLinks
          links={[
            {
              href: 'https://en.wikipedia.org/wiki/Bitwise_operation',
              text: 'Wikipedia: Bitwise Operation',
            },
            {
              href: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/',
              text: 'GFG: Bitwise Operators in C/C++',
            },
            {
              href: 'https://www.tutorialspoint.com/bitwise-operators-in-c',
              text: 'TutorialsPoint: Bitwise Operators in C',
            },
            {
              href: 'https://www.programiz.com/c-programming/c-bitwise-operators',
              text: 'Programiz: Bitwise Operators',
            },
            {
              href: 'https://www.javatpoint.com/bitwise-operators-in-c',
              text: 'JavaTpoint: Bitwise Operators in C',
            },
          ]}
        />
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
      {
        question: 'What does the | operator do?',
        options: ['OR', 'AND', 'XOR', 'NOT'],
        answer: 'OR',
      },
      {
        question: 'What is the result of 5 & 3?',
        options: ['1', '2', '3', '5'],
        answer: '1',
      },
    ],
    flashcards: [
      { front: 'AND (&)', back: 'Bitwise AND operator.' },
      { front: 'OR (|)', back: 'Bitwise OR operator.' },
      { front: 'XOR (^)', back: 'Bitwise XOR operator.' },
      { front: '<<', back: 'Left shift operator.' },
      { front: 'Bitmasking', back: 'Setting/clearing bits.' },
      { front: 'NOT (~)', back: 'Bitwise NOT operator.' },
      { front: 'Right Shift (>>)', back: 'Shifts bits to the right.' },
      { front: 'OR (|)', back: 'Bitwise OR operator.' },
      { front: 'AND (&)', back: 'Bitwise AND operator.' },
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
        <div
          style={{
            padding: '10px',
            borderRadius: '15px',
            background: '#f5f6f7',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <VideoPlayer url="https://www.youtube.com/embed/XJkIaw2e1Pw" />
        </div>
        <UsefulLinks
          links={[
            { href: 'https://en.wikipedia.org/wiki/Summation', text: 'Wikipedia: Summation' },
            {
              href: 'https://www.geeksforgeeks.org/summation-in-mathematics/',
              text: 'GFG: Summation in Mathematics',
            },
            {
              href: 'https://www.tutorialspoint.com/summation-in-mathematics',
              text: 'TutorialsPoint: Summation in Mathematics',
            },
            { href: 'https://www.programiz.com/math/summation', text: 'Programiz: Summation' },
            {
              href: 'https://www.javatpoint.com/summation-in-mathematics',
              text: 'JavaTpoint: Summation in Mathematics',
            },
          ]}
        />
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
      {
        question: 'What is the sum of the first n odd numbers?',
        options: ['n^2', 'n(n+1)', 'n(n+1)/2', '2n'],
        answer: 'n^2',
      },
      {
        question: 'What is the sum of an arithmetic series?',
        options: ['n/2 * (a + l)', 'n * a', 'a/(1-r)', 'n^2'],
        answer: 'n/2 * (a + l)',
      },
    ],
    flashcards: [
      { front: 'Summation (∑)', back: 'Sum of terms.' },
      { front: 'n(n+1)/2', back: 'Sum of first n natural numbers.' },
      { front: 'Geometric Series', back: 'Sum: a/(1-r).' },
      { front: 'Infinite Series', back: 'Sum with infinite terms.' },
      { front: 'Finite Sum', back: 'Sum with finite terms.' },
      { front: 'Arithmetic Series', back: 'Sum of terms with a constant difference.' },
      { front: 'Sigma Notation', back: 'Compact way to represent summation.' },
      { front: 'Sum of Odd Numbers', back: 'The sum of the first n odd numbers is n^2.' },
      { front: 'Arithmetic Series', back: 'Sum: n/2 * (a + l).' },
    ],
  },
];
