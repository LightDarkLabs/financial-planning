import { types } from 'mobx-state-tree'
import ExpandableTableUIModel from '@components/ExpandableTable/UIModel'

const UIStore = types
  .model({
    ExpandableTable: types.optional(ExpandableTableUIModel, {})
  })
  .named('UIStore')

export default UIStore
