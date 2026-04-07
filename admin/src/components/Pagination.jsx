import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange, maxButtons = 5 }) => {
  if (totalPages === 1) return null;

  const pages = [];
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) pages.push(i);

  const handlePageClick = (page) => {
    if (page !== currentPage) onPageChange(page);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`cursor-pointer  p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* First page and leading ellipsis */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 text-gray-500">...</span>}
        </>
      )}

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`cursor-pointer px-3 py-2 rounded-md border border-gray-300 transition ${
            page === currentPage
              ? "bg-primary text-white border-primary"
              : "bg-white hover:bg-gray-100 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Trailing ellipsis and last page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-gray-500">...</span>}
          <button
            onClick={() => handlePageClick(totalPages)}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`cursor-pointer p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
