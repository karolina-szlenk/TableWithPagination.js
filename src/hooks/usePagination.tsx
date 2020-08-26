import { useState, useEffect } from 'react'
import { User } from '../myModule'

const usePagination = (dataEntries: User[], elementsOnPage = 50) => {
  const [actualPageIdx, setActualPageIdx] = useState(1)
  const lastPageIdx = Math.ceil(dataEntries.length / elementsOnPage)
  const [isBusy, setIsBusy] = useState(false)

  useEffect(() => {
    setIsBusy(true)
    let timer = setTimeout(() => setIsBusy(false), 333)

    return () => {
      clearTimeout(timer)
    }
  }, [actualPageIdx])

  const entriesOnSelectedPage = () => {
    const firstEntry = (actualPageIdx - 1) * elementsOnPage
    const lastEntry = firstEntry + elementsOnPage
    return dataEntries.slice(firstEntry, lastEntry)
  }

  const goToFirstPage = () => {
    setActualPageIdx(1)
  }

  const goToLastPage = () => {
    setActualPageIdx(lastPageIdx)
  }

  const goToPage = (page: number) => {
    setActualPageIdx(page)
  }

  const goToPrevPage = () => {
    setActualPageIdx((actualPageIdx) => Math.max(actualPageIdx - 1, 1))
  }

  const goToNextPage = () => {
    setActualPageIdx((actualPageIdx) => Math.min(actualPageIdx + 1, lastPageIdx))
  }

  const paginationState = {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    isBusy,
  }

  const paginationActions = {
    goToFirstPage,
    goToPrevPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  }

  return [paginationState, paginationActions] as const
}

export default usePagination
