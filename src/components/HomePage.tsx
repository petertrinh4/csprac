import ModuleCard from '../components/ModuleCard';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NavBar />
          <ModuleCard
            title="Dynamic Memory Allocation"
            description=""
            image="public/pointer.webp"
            id="dma"
          />
          <ModuleCard
            title="Algorithm Analysis"
            description=""
            image="public/alg_analysis.webp"
            id="alg"
          />
          <ModuleCard
            title="Recursion, Recurrence Relations"
            description=""
            image="public/recursion.webp"
            id="rec"
          />
          <ModuleCard
            title="Linked Lists"
            description=""
            image="public/linkedlist.webp"
            id="linkedlist"
          />
          <ModuleCard title="Stacks, Queues" description="" image="public/stack.webp" id="stacks" />
          <ModuleCard
            title="Binary Search Trees, AVL Trees, Heaps"
            description=""
            image="public/bst.webp"
            id="trees"
          />
          <ModuleCard
            title="Sorting Algorithms"
            description=""
            image="public/mergesort.webp"
            id="sort"
          />
          <ModuleCard title="HashTables" description="" image="public/hashtables.webp" id="hash" />
          <ModuleCard
            title="Bitwise Operators, Bitmasking, Base Conversion"
            description=""
            image="public/binaryconv.webp"
            id="bitwise"
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
