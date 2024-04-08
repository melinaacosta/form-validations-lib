import { describe, expect, test } from 'vitest'
import { isPositiveNumber } from '../isPositiveNumber'

describe('isPositiveNumber', () => {
  test.each([
    [5, true],
    [-2, false],
    [0, false],
    ['abc', false],
    ['', false],
    [null, false],
    [undefined, false],
    [false, false],
    [isNaN, false]
  ])('isPositiveNumber(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(isPositiveNumber(arg)).toBe(expected)
  })
})
