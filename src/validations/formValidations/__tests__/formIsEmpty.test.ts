import { describe, expect, test } from 'vitest'
import { formIsEmpty } from '../formIsEmpty'

describe('formIsEmpty', () => {
  test.each([
    ['', true],
    ['   ', true],
    ['abc', false],
    [undefined, true],
    [true, false],
    [0, false],
    [{}, true],
    [{ key: 'value' }, false],
    [[], true],
    [[1, 2, 3], false]
  ])('formIsEmpty(%j) should be %j', (arg, expected) => {
    expect(formIsEmpty(arg)).toBe(expected)
  })
})
