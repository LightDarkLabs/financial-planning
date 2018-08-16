import React from 'react'
import { inject, observer } from 'mobx-react'


const ExpandableTable = ({ store, items, id, TableHeadComponent, RowComponent, ExpandedRowComponent }) => {
  return (
    <table className="table">
      <TableHeadComponent />

      <tbody>
        { items.map(item => {
          if (store.UIStore.ExpandableTable.selectedRows.includes(`${id}-${item.id}`)) {
            return <ExpandedRowComponent key={item.id} item={item} />
          }
            return <RowComponent key={item.id} item={item} onClick={() => store.UIStore.ExpandableTable.selectRow(`${id}-${item.id}`)} />
        })}
      </tbody>
    </table>
  )
}

export default inject('store')(observer(ExpandableTable))
