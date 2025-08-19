import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className="navbar bg-white text-black shadow-sm fixed top-0 left-0 w-full z-10">
      <div className="flex-none">
        <img src="/ucf.webp" alt="UCF Logo" className="h-10 w-10 ml-4" />
      </div>
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-bold">CS1 Prep</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-black hover:bg-gray-200">Home</Link>
          </li>
          <li>
            <details className="relative">
              <summary className="text-black hover:bg-gray-200">Modules</summary>
              <ul className="bg-white text-black rounded-t-none p-2 w-96 absolute left-0 md:left-auto md:right-0">
                <li>
                  <Link to="/module/dma" className="text-black hover:bg-gray-200">
                    Dynamic Memory Allocation
                  </Link>
                </li>
                <li>
                  <Link to="/module/alg" className="text-black hover:bg-gray-200">
                    Algorithm Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/module/rec" className="text-black hover:bg-gray-200">
                    Recursion, Recurrence Relations
                  </Link>
                </li>
                <li>
                  <Link to="/module/linkedlist" className="text-black hover:bg-gray-200">
                    Linked Lists
                  </Link>
                </li>
                <li>
                  <Link to="/module/stacks" className="text-black hover:bg-gray-200">
                    Stacks, Queues
                  </Link>
                </li>
                <li>
                  <Link to="/module/trees" className="text-black hover:bg-gray-200">
                    Binary Search Trees, AVL Trees, Tries, Heaps
                  </Link>
                </li>
                <li>
                  <Link to="/module/sort" className="text-black hover:bg-gray-200">
                    Sorting Algorithms
                  </Link>
                </li>
                <li>
                  <Link to="/module/sum" className="text-black hover:bg-gray-200">
                    Summations
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </>
);
};
export default NavBar;
