const {equal, notEqual} = require('assert')
const {noop} = require('..')

describe('m.icro', function () {
  it('uses standard module loading', () => {
    let module = require('..')
    notEqual(module.noop, undefined)
  })
})

describe('m.noop', () => {
  it('exports a noop function', () => {
    equal(noop, Function.prototype)
  })
  it('returns void when called', () => {
    equal(noop(), undefined)
  })
})
