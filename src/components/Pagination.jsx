import React from "react";

function Pagination({ currentPage, totalPage, onPageChange }) {
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          {currentPage > 1 && (
            <div
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer"
              onClick={handlePreviousPage}
            >
              Previous
            </div>
          )}
        </li>
        
        <li aria-current="page">
          <div className="pointer-events-none relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 cursor-pointer">
            {currentPage}/{totalPage}
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </div>
        </li>
        
        <li>
          {currentPage < totalPage && (
            <div
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer"
              onClick={handleNextPage}
            >
              Next
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
