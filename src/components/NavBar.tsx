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
              <a className="text-black hover:bg-gray-200">Home</a>
            </li>
            <li>
              <details className="relative">
                <summary className="text-black hover:bg-gray-200">Modules</summary>
                <ul className="bg-white text-black rounded-t-none p-2 w-96 absolute left-0 md:left-auto md:right-0">
                  <li>
                    <a className="text-black hover:bg-gray-200">Dynamic Memory Allocation</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Algorithm Analysis</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Recursion, Recurrence Relations</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Linked Lists</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Stacks, Queues</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">
                      Binary Search Trees, AVL Trees, Tries, Heaps
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Sorting Algorithms</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">HashTables</a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">
                      Bitwise Operators, Bitmasking, Base Conversion
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:bg-gray-200">Summations</a>
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
