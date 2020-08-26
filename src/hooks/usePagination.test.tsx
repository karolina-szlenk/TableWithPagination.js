import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from './usePagination'

describe('Hook usePagination tests', () => {
  const mockedUsers = [
    { id: 1, first_name: 'Bruce', last_name: 'Wayne' },
    { id: 2, first_name: 'Peter', last_name: 'Parker' },
    { id: 3, first_name: 'Clark', last_name: 'Kent' },
  ]

  const elementsOnPage = 2

  it('if function goToPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToPage(5)
    })
    expect(result.current[0].actualPageIdx).toBe(5)
  })

  it('if function goToLastPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToLastPage()
    })
    expect(result.current[0].actualPageIdx).toBe(result.current[0].lastPageIdx)
  })

  it('if function goToFirstPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToFirstPage()
    })
    expect(result.current[0].actualPageIdx).toBe(1)
  })

  it('if function goToNextPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToPage(4)
      result.current[1].goToNextPage()
    })
    expect(result.current[0].actualPageIdx).toBe(5)
  })

  it('if function goToPrevPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToPage(4)
      result.current[1].goToPrevPage()
    })
    expect(result.current[0].actualPageIdx).toBe(3)
  })

  it('if function entriesOnSelectedPage works', () => {
    const { result } = renderHook(() => usePagination(mockedUsers, elementsOnPage))
    expect(result.current[0].entriesOnSelectedPage().length).toBe(elementsOnPage)
  })

  it('if isBusy is true while function is on going', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToPage(2)
    })
    expect(result.current[0].isBusy).toBe(true)
  })

  it('if isBusy is false when function is done', () => {
    const { result } = renderHook(() => usePagination(mockedUsers))
    act(() => {
      result.current[1].goToPage(2)
    })
    setTimeout(() => expect(result.current[0].isBusy).toBe(false), 333)
  })
})
