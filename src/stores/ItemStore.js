import { types, applySnapshot } from 'mobx-state-tree'
import Item from '@models/Item'

const ItemStore = types
  .model({
    items: types.optional(types.array(Item), [])
  })
  .named('ItemStore')
  .actions(self => ({
    afterCreate() {
      applySnapshot(self, { items: [
        { name: 'Project A', date: Date.parse('2019-01-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-02-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-03-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-04-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-05-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-06-01'), value: { cents: 1500000 } },
        { name: 'Project A', date: Date.parse('2019-07-01'), value: { cents: 1500000 } },
        { name: 'Salary A', date: Date.parse('2019-01-08'), value: { cents: -150000 } },
        { name: 'Salary A', date: Date.parse('2019-01-15'), value: { cents: -150000 } },
        { name: 'Salary A', date: Date.parse('2019-01-22'), value: { cents: -150000 } },
        { name: 'Salary A', date: Date.parse('2019-01-29'), value: { cents: -150000 } },
        { name: 'Salary A', date: Date.parse('2019-02-05'), value: { cents: -150000 } },
        { name: 'Salary A', date: Date.parse('2019-02-12'), value: { cents: -150000 } },
      ] })
    }
  }))

export default ItemStore
