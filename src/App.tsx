import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import ModuleInfo from './components/ModuleInfo.tsx';
import { useParams } from 'react-router-dom';

type Module = {
  id: string;
  title: string;
  intro: string;
  image: string;
  content: string;
};

const modules: Module[] = [
  {
    id: 'dma',
    title: 'Dynamic Memory Allocation',
    intro: 'Learn about dynamic memory allocation techniques.',
    image: 'public/pointer.webp',
    content: 'Content for Dynamic Memory Allocation module.',
  },
  {
    id: 'alg',
    title: 'Algorithm Analysis',
    intro: 'Understand how to analyze algorithms.',
    image: 'public/alg_analysis.webp',
    content: 'Content for Algorithm Analysis module.',
  },
  {
    id: 'rec',
    title: 'Recursion, Recurrence Relations',
    intro: 'Explore recursion and recurrence relations.',
    image: 'public/recursion.webp',
    content: 'Content for Recursion module.',
  },
  {
    id: 'linkedlist',
    title: 'Linked Lists',
    intro: 'Learn about linked lists and their operations.',
    image: 'public/linkedlist.webp',
    content: 'Content for Linked Lists module.',
  },
  {
    id: 'stacks',
    title: 'Stacks, Queues',
    intro: 'Understand stacks and queues data structures.',
    image: 'public/stack.webp',
    content: 'Content for Stacks and Queues module.',
  },
  {
    id: 'trees',
    title: 'Binary Search Trees, AVL Trees, Heaps',
    intro: 'Learn about binary search trees, AVL trees, and heaps.',
    image: 'public/bst.webp',
    content: 'Content for Trees module.',
  },
  {
    id: 'sort',
    title: 'Sorting Algorithms',
    intro: 'Explore various sorting algorithms.',
    image: 'public/mergesort.webp',
    content: 'Content for Sorting Algorithms module.',
  },
  {
    id: 'hash',
    title: 'HashTables',
    intro: 'Understand hash tables and their applications.',
    image: 'public/hashtables.webp',
    content: 'Content for HashTables module.',
  },
  {
    id: 'bitwise',
    title: 'Bitwise Operators, Bitmasking, Base Conversion',
    intro: 'Learn about bitwise operations, bitmasking, and base conversion.',
    image: 'public/binaryconv.webp',
    content: 'Content for Bitwise Operators module.',
  },
];

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/module/:id" element={<ModuleInfoWrapper modules={modules} />} />
      </Routes>
    </>
  );
};

function ModuleInfoWrapper({ modules }: { modules: Module[] }) {
  const { id } = useParams();
  const module = modules.find((m: Module) => m.id === id);
  if (!module) {
    return <div>Module not found</div>;
  }
  return (
    <ModuleInfo
      title={module.title}
      intro={module.intro}
      image={module.image}
      content={module.content}
    />
  );
}
export default App;
