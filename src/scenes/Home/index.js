import React from 'react'
import { inject, observer } from 'mobx-react'

const Home = ({ store }) => (
  <div>
    <h1>Financial Planning</h1>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Value</th>
        </tr>

      </thead>

      <tbody>
        { store.ItemStore.items.map(item => (
          <tr key={item.id}>
            <td>{item.name || 'asdlfkj'}</td>
            <td>{item.date.toUTCString()}</td>
            <td>{item.value.cents}</td>
          </tr>
          ))}
      </tbody>
    </table>

  </div>
)

export default inject('store')(observer(Home))
