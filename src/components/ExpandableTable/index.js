import React from 'react'
import { inject, observer } from 'mobx-react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

const OnClick = (store, id, item) => () => {
  console.log('bang!')
  store.UIStore.ExpandableTable.selectRow(`${id}-${item.id}`)
}

const TheRowContent = ({ store, id, item, RowComponent, ExpandedRowComponent }) => {
  if (store.UIStore.ExpandableTable.selectedRows.includes(`${id}-${item.id}`)) {
    <ExpandedRowComponent key={`${item.id}-Expanded`} item={item} />
  }
  return <RowComponent key={item.id} item={item} />
}

const ExpandableTable = ({ items, TableHeadComponent, store, id, ...props }) => {
  return (
    <table className="table">
      <TableHeadComponent />

      <tbody>

        { items.map(item => {
            return (
              <ReactCSSTransitionReplace
                childComponent={props => <div {...props} />}
                component={props => <tr onClick={OnClick(store, id, item)} {...props} />}
                transitionName="cross-fade"
                transitionEnterTimeout={100000}
                transitionLeaveTimeout={100000}
                key={item.id}
              >
                <TheRowContent {...props} item={item} store={store} id={id} />
              </ReactCSSTransitionReplace>
            )
        })}
      </tbody>
    </table>
  )
}

export default inject('store')(observer(ExpandableTable))
