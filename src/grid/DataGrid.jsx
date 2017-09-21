import React from 'react'
import ReactDataGrid from 'react-data-grid'

const DataGrid = (props) => {
  return (
    <div style={{ width: 300 }}>
      <ReactDataGrid
        enableCellSelect
        columns={props.columns}
        rowGetter={props.rowGetter}
        rowsCount={props.rows.length}
        onGridRowsUpdated={props.handleGridRowsUpdated}
      />
    </div>
  )
}

export default DataGrid
