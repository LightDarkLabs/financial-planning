import { types } from 'mobx-state-tree'
import Money from '@models/Money'

const Item = types
  .model({
    id: types.optional(types.identifier(), () => `${Math.random()}`),
    name: '',
    date: types.Date,
    value: types.optional(Money, {})
  })

export default Item
