import { types } from 'mobx-state-tree'

const Money = types
  .model({ cents: 0 })

export default Money
