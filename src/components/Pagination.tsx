import React, { FC } from 'react'
import styles from './Pagination.module.css'

interface PaginationProps {
  paginationState: {
    lastPageIdx: number
    actualPageIdx: number
  }
  paginationActions: {
    goToFirstPage: () => void
    goToPrevPage: () => void
    goToNextPage: () => void
    goToLastPage: () => void
    goToPage: (number: number) => void
  }
}

const Pagination: FC<PaginationProps> = ({ paginationState, paginationActions }) => {
  const pageNumbers = []

  for (let i = 1; i <= paginationState.lastPageIdx; i++) {
    pageNumbers.push(i)
  }

  const renderPagination = pageNumbers.map((number) => (
    <button
      key={number}
      onClick={() => paginationActions.goToPage(number)}
      className={
        paginationState.actualPageIdx === number ? styles.actualIdxStyle : styles.paginationStyle
      }
    >
      {number}
    </button>
  ))

  const addStyleToBtn = () => {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((btn) => {
      btn.classList.add(styles.btnStyle)
    })
  }

  addStyleToBtn()

  return (
    <div className={styles.paginationContainer}>
      <button onClick={paginationActions.goToFirstPage}>GO TO FIRST</button>
      <button onClick={paginationActions.goToPrevPage} data-testid="goToPrevPage">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div data-testid="goToPageButtons">{renderPagination}</div>
      <button onClick={paginationActions.goToNextPage} data-testid="goToNextPage">
        <i className="fas fa-chevron-right"></i>
      </button>
      <button onClick={paginationActions.goToLastPage}>GO TO LAST</button>
    </div>
  )
}

export default Pagination
