import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('githubUser'));
  }, []);
  return loggedIn;
};

const NavBar = () => {
  const loggedIn = useAuthStatus();

  const handleSignOut = () => {
    localStorage.removeItem('githubUser');
    window.location.reload();
  };

  return (
    <>
      <div className="navbar bg-white text-black shadow-sm fixed top-0 left-0 w-full z-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="/ucfpegasus.webp" alt="UCF Logo" className="h-10 w-10 ml-4 cursor-pointer" />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold">CS1 PREP</h1>
        </div>
        <div className="flex items-center">
          <ul className="menu menu-horizontal px-1">
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
                      Recursion & Recurrence Relations
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/linkedlist" className="text-black hover:bg-gray-200">
                      Linked Lists
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/stacks" className="text-black hover:bg-gray-200">
                      Stacks & Queues
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/trees" className="text-black hover:bg-gray-200">
                      BST, AVL Trees, Tries, Heaps
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/sort" className="text-black hover:bg-gray-200">
                      Sorting Algorithms
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/hash" className="text-black hover:bg-gray-200">
                      Hash Tables
                    </Link>
                  </li>
                  <li>
                    <Link to="/module/bitwise" className="text-black hover:bg-gray-200">
                      Bitwise Operators, Bitmasking, Base Conversion
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
            <li>
              <Link to="/resources" className="text-black hover:bg-gray-200">
                Resources
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <button onClick={handleSignOut} className="text-black hover:bg-gray-200">
                  Sign Out
                </button>
              ) : (
                <Link to="/auth" className="text-black hover:bg-gray-200">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
