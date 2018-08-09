import { getSnapshot } from 'mobx-state-tree'
import Item from '@models/Item'
import { stubDate } from '@testhelper'
import ItemStore from '@stores/ItemStore'

stubDate(new Date('2018-01-01T00:00:00Z'))

it('serializes', () => {
  const store = ItemStore.create({})

  expect(getSnapshot(store)).toMatchSnapshot()
})
