import { types } from 'mobx-state-tree'
import Money from '@models/Money'

const Item = types
  .model({
    name: '',
    date: types.Date,
    value: types.optional(Money, {})
  })

export default Item
