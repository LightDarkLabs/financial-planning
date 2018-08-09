import { getSnapshot } from 'mobx-state-tree'
import Item from '@models/Item'
import { stubDate } from '@testhelper'

stubDate(new Date('2018-01-01T00:00:00Z'))

it('serializes', () => {
  const item = Item.create({ date: Date.now() })

  expect(getSnapshot(item)).toMatchSnapshot()
})
