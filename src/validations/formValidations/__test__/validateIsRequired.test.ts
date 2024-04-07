import { describe, expect, test } from 'vitest'
import { isRequired } from '../validateIsRequired'

describe('isRequired', () => {
  test.each([
    ['abc', true],
    ['', false],
    [undefined, false],
    [{}, true],
    [0, true],
    [false, true]
  ])('isRequired(%j) should be %j', (arg, expected) => {
    expect(isRequired(arg)).toBe(expected)
  })
})
