import React from 'react';
import './App.css';
import PaginatedTable from './components/PaginatedTable';
import usePagination from './hooks/usePagination';
import Pagination from './components/Pagination';

let dataEntries = require('./users.json');

function App() {
  const [paginationState, paginationActions] = usePagination(dataEntries);
  return (
    <div className="App">
      <h2>Users</h2>
      { !paginationState.isBusy && <PaginatedTable dataEntries={paginationState.entriesOnSelectedPage()}/> }
      <Pagination paginationState={paginationState} paginationActions={paginationActions}/>
    </div>
  );
}

export default App;
