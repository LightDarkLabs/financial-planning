import React from 'react'
import { inject, observer } from 'mobx-react'
import ExpandableTable from '@components/ExpandableTable'

const TableHeadComponent = () => (
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
)

const RowComponent = ({ item, ...props }) => (
  <tr className="wee" {...props}>
    <td>{item.name || 'asdlfkj'}</td>
    <td>{item.date.toUTCString()}</td>
    <td>{item.value.cents}</td>
  </tr>
)


const ExpandedRowComponent = ({ item }) => (
  <tr className="wee" colSpan={3}>
    <div >
      <h1>{item.name}</h1>
      <p>laksdjf</p>
    </div>
  </tr>
)

const Home = ({ store }) => (
  <div>
    {/* <h1>Financial Planning</h1> */}

    <ExpandableTable
      id="expenses"
      items={store.ItemStore.items}
      TableHeadComponent={TableHeadComponent}
      RowComponent={RowComponent}
      ExpandedRowComponent={ExpandedRowComponent}
    />

  </div>
)

export default inject('store')(observer(Home))
