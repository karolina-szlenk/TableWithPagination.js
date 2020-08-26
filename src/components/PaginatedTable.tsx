import React, { FC } from 'react'
import styles from './PaginatedTable.module.css'
import { User } from '../myModule'

interface PaginatedTableProps {
  dataEntries: User[]
}

const PaginatedTable: FC<PaginatedTableProps> = ({ dataEntries }) => {
  const renderData = () =>
    dataEntries.map((user) => (
      <div key={user.id} className={styles.tableStyle}>
        <p>
          {user.id}
          {'. '}
        </p>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
    ))
  return (
    <div>
      <div className={`${styles.tableStyle} ${styles.headStyle}`}>
        <p>No.</p>
        <p>Name</p>
      </div>
      {renderData()}
    </div>
  )
}

export default PaginatedTable
