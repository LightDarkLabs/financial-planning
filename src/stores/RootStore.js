import { types } from 'mobx-state-tree'
import ItemStore from '@stores/ItemStore'
import UIStore from '@stores/UIStore'

const RootStore = types
  .model({
    ItemStore: types.optional(ItemStore, {}),
    UIStore: types.optional(UIStore, {})
  })
  .named('RootStore')

export default RootStore
