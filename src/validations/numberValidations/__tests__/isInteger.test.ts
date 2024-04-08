import { describe, expect, test } from 'vitest'
import { isInteger } from '../isInteger'

describe('isInteger', () => {
  test.each([
    [5, true],
    [-2, true],
    [0, true],
    [3.14, false],
    [-1.5, false],
    ['abc', false],
    ['', false],
    [null, false],
    [undefined, false],
    [{}, false]
  ])('Integer(%j) should be %j', (arg, expected) => {
    // @ts-expect-error should accept any value
    expect(isInteger(arg)).toBe(expected)
  })
})
