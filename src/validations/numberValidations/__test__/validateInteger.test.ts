import { describe, expect, test } from 'vitest'
import { validateInteger } from '../validateInteger'

describe('validateInteger', () => {
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
  ])('validateInteger(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(validateInteger(arg)).toBe(expected)
  })
})
