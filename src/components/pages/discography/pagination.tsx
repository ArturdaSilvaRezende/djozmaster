"use client";
import { useState } from "react";
import { discographyList } from "./discographyList";
import Cards from "./cards";
import styles from "@/styles/pages/_Discography.module.scss";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const disco = discographyList;

  const ITEMS_PER_PAGE = 6;
  const totalDisco = disco.length;
  const visiblePages = 3;
  const pageButtons = [];
  const totalPages = Math.ceil(totalDisco / ITEMS_PER_PAGE);

  const startPage = Math.max(
    1,
    Math.min(currentPage, totalPages - visiblePages + 1) -
      Math.floor(visiblePages / 2)
  );
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const indexOfLastDisco = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstDisco = indexOfLastDisco - ITEMS_PER_PAGE;
  const currentDisco = disco.slice(indexOfFirstDisco, indexOfLastDisco);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={i === currentPage ? "bgPaginationActive" : ""}
      >
        <span>{i}</span>
      </button>
    );
  }

  return (
    <>
      <div className={styles.discography__contents}>
        {currentDisco.map((disco) => (
          <Cards id={disco.id} disco={disco.disco} key={disco.id} />
        ))}
      </div>

      <div className={styles.pagination__buttons}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <span>Prev</span>
        </button>
        {pageButtons}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <span>Next</span>
        </button>
      </div>
    </>
  );
}
