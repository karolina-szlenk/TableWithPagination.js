import React, { FC } from 'react'

interface User {
  id: number
  first_name: string
}

interface PaginatedTableProps {
  dataEntries: User[]
}

const PaginatedTable: FC<PaginatedTableProps> = ({ dataEntries }) => {
  const tableStyle = {
    border: '1px solid black',
    margin: '1px 200px',
  }
  const renderData = () =>
    dataEntries.map((user) => (
      <div key={user.id} style={tableStyle}>
        {user.first_name}
      </div>
    ))
  return <div>{renderData()}</div>
}

export default PaginatedTable
