import React from 'react'
import { render, screen } from '@testing-library/react'
import PaginatedTable from './PaginatedTable'

const mockedUsers = [
  { id: 1, first_name: 'Cori', last_name: 'Wescott' },
  { id: 2, first_name: 'Teena', last_name: 'Kedge' },
  { id: 3, first_name: 'Englebert', last_name: 'Menlove' },
]

test('renders component if it has props', () => {
  render(<PaginatedTable dataEntries={mockedUsers} />)
  const element = screen.getByTestId('users')
  expect(element.childElementCount).toBe(mockedUsers.length)
})
