import { types } from 'mobx-state-tree'
import ItemStore from '@stores/ItemStore'

const RootStore = types
  .model({
    ItemStore: types.optional(ItemStore, {})
  })
  .named('RootStore')

export default RootStore
