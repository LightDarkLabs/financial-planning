import { types } from 'mobx-state-tree'
import Item from '@models/Item'

const ItemStore = types
  .model({
    items: types.optional(types.array(Item), [])
  })
  .named('ItemStore')

export default ItemStore
