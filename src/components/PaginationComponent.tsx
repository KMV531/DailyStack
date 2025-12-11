import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// -------------------------------------------------------------------
// HELPER FUNCTION: Calculates which page numbers/ellipses to display
// -------------------------------------------------------------------

const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages: (number | "ellipsis")[] = [];
  const maxPagesToShow = 5;

  // Show all pages if total is small
  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Always include first page
  pages.push(1);

  // Add ellipsis if current page is far from the start
  if (currentPage > 3) {
    pages.push("ellipsis");
  }

  // Add 1 page before, current page, and 1 page after, ensuring range limits
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    pages.push(i);
  }

  // Add ellipsis if current page is far from the end
  if (currentPage < totalPages - 2) {
    pages.push("ellipsis");
  }

  // Always include last page (only if totalPages > 1 to avoid duplicates)
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  // Filter duplicates created by overlapping logic and return unique list
  return Array.from(new Set(pages));
};

// -------------------------------------------------------------------
// MAIN EXPORTED COMPONENT
// -------------------------------------------------------------------

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ArticlesPaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pagesToShow = getPageNumbers(currentPage, totalPages);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <Pagination className="text-white">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!isPrevDisabled) onPageChange(currentPage - 1);
            }}
            className={isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""}
          />
        </PaginationItem>

        {pagesToShow.map((page, index) => (
          <PaginationItem key={index}>
            {page === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page as number);
                }}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!isNextDisabled) onPageChange(currentPage + 1);
            }}
            className={isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
