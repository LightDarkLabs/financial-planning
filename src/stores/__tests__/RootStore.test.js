import { getSnapshot } from 'mobx-state-tree'
import { stubDate } from '@testhelper'
import RootStore from '@stores/RootStore'

stubDate(new Date('2018-01-01T00:00:00Z'))

it('serializes', () => {
  const store = RootStore.create({})

  expect(getSnapshot(store)).toMatchSnapshot()
})
