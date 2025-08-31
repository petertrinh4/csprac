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
            title="Dynamic Memory Allocation"
            description=""
            image="/malloc.webp"
            id="dma"
          />
          <ModuleCard
            title="Algorithm Analysis"
            description=""
            image="/alg_analysis2.webp"
            id="alg"
          />
          <ModuleCard
            title="Recursion, Recurrence Relations"
            description=""
            image="/recursion3.webp"
            id="rec"
          />
          <ModuleCard
            title="Linked Lists"
            description=""
            image="/linkedlist2.webp"
            id="linkedlist"
          />
          <ModuleCard title="Stacks, Queues" description="" image="/stack2.webp" id="stacks" />
          <ModuleCard
            title="Binary Search Trees, AVL Trees, Heaps"
            description=""
            image="/bst1.webp"
            id="trees"
          />
          <ModuleCard
            title="Sorting Algorithms"
            description=""
            image="/mergesort2.webp"
            id="sort"
          />
          <ModuleCard title="HashTables" description="" image="/hshtbl.webp" id="hash" />
          <ModuleCard
            title="Bitwise Operators, Bitmasking, Base Conversion"
            description=""
            image="/binary2.webp"
            id="bitwise"
          />
          <ModuleCard
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
