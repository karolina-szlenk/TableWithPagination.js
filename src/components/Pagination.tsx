import React, { FC } from 'react'

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
  const paginationStyle = {
    border: '1px solid black',
    padding: '0 5px',
  }

  const actualIdxStyle = {
    border: '1px solid red',
    padding: '0 5px',
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  const pageNumbers = []

  for (let i = 1; i <= paginationState.lastPageIdx; i++) {
    pageNumbers.push(i)
  }

  const renderPagination = pageNumbers.map((number) => (
    <span
      key={number}
      style={paginationState.actualPageIdx === number ? actualIdxStyle : paginationStyle}
    >
      <a onClick={() => paginationActions.goToPage(number)} style={linkStyle} href="!#">
        {number}
      </a>
    </span>
  ))

  return (
    <div>
      <button onClick={paginationActions.goToFirstPage}>GO TO FIRST</button>
      <button onClick={paginationActions.goToPrevPage}>PREV</button>
      {renderPagination}
      <button onClick={paginationActions.goToNextPage}>NEXT</button>
      <button onClick={paginationActions.goToLastPage}>GO TO LAST</button>
    </div>
  )
}

export default Pagination
