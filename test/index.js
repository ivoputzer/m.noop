const {equal} = require('assert')

test('exports.noop', () => {
  const {noop} = require('..')

  test('is callable', () => {
    equal(noop, Function.prototype)
  })

  test('returns undefined when called', () => {
    equal(noop(), undefined)
  })
})
