import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'

const randomFn = jest.fn()

const paginationState = {
  actualPageIdx: 1,
  lastPageIdx: 10,
}

const paginationActions = {
  goToFirstPage: randomFn,
  goToPrevPage: randomFn,
  goToNextPage: randomFn,
  goToLastPage: randomFn,
  goToPage: randomFn,
}

test('if components renders buttons', () => {
  render(<Pagination paginationState={paginationState} paginationActions={paginationActions} />)

  const firstButton = screen.getByText('GO TO FIRST')
  fireEvent.click(firstButton)

  const lastButton = screen.getByText('GO TO LAST')
  fireEvent.click(lastButton)

  const prevButton = screen.getByTestId('goToPrevPage')
  fireEvent.click(prevButton)

  const nextButton = screen.getByTestId('goToNextPage')
  fireEvent.click(nextButton)

  const goToPageButtons = screen.getByTestId('goToPageButtons')
  expect(goToPageButtons.childElementCount).toBe(paginationState.lastPageIdx)
})
