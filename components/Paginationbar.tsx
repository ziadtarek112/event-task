import exp from "constants";
import { useEffect, useState } from "react";

interface PaginationProps {
    totalPages: number | 1;
    page: number;
    onPageChange: (page: number) => void;
  }
  


const Pagination = ({ totalPages, onPageChange,page }:PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(page);
  
    useEffect(() => {
      // Notify parent component about page change
      onPageChange(currentPage);
    }, [currentPage, onPageChange]);
  
    const handlePageClick = (page :number) => {
      setCurrentPage(page);
    };
  
    const renderPaginationNumbers = () => {
      const paginationNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-2 rounded-md bg-bg-secondary ${currentPage === i ? ' text-white border border-bg-secondary' : ''}`}
          >
            {i}
          </button>
        );
      }
      return paginationNumbers;
    };
  
    return (
      <div className="flex justify-center mt-4">
        {renderPaginationNumbers()}
      </div>
    );
  };

  export default Pagination;