import Money from '@models/Money'

it('defaults to zero cents', () => {
  const money = Money.create({})

  expect(money.cents).toBe(0)
})
