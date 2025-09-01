import ModuleCard from '../components/ModuleCard';
import NavBar from '../components/NavBar';
import Background from '../components/Background';

const HomePage = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div className="with-navbar min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Dynamic Memory Allocation"
            description=""
            image="/malloc.webp"
            id="dma"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Algorithm Analysis"
            description=""
            image="/alg_analysis2.webp"
            id="alg"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Recursion, Recurrence Relations"
            description=""
            image="/recursion3.webp"
            id="rec"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Linked Lists"
            description=""
            image="/linkedlist2.webp"
            id="linkedlist"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Stacks, Queues"
            description=""
            image="/stack2.webp"
            id="stacks"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Binary Search Trees, AVL Trees, Heaps"
            description=""
            image="/bst1.webp"
            id="trees"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Sorting Algorithms"
            description=""
            image="/mergesort2.webp"
            id="sort"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="HashTables"
            description=""
            image="/hshtbl.webp"
            id="hash"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Bitwise Operators, Bitmasking, Base Conversion"
            description=""
            image="/binary2.webp"
            id="bitwise"
          />
          <ModuleCard
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            title="Summations"
            description="Stay tuned for more modules."
            image="/sums2.webp"
            id="sum"
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
