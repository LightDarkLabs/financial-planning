import { types } from 'mobx-state-tree'

const UIModel = types
  .model({
    selectedRows: types.optional(types.array(types.string), [])
  })
  .actions(self => ({
    selectRow(id) {
      self.selectedRows.push(id)
    }
  }))

export default UIModel
