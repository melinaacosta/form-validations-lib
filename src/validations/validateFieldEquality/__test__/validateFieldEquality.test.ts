import { describe, expect, test } from 'vitest'
import { validateFieldEquality } from '../validateFieldEquality'

describe('validateFieldEquality', () => {
  test.each([
    { value1: 'abc', value2: 'abc', expected: true },
    { value1: 123, value2: 123, expected: true },
    { value1: 'abc', value2: 'def', expected: false },
    { value1: null, value2: null, expected: true },
    { value1: undefined, value2: undefined, expected: true },
    { value1: '', value2: '', expected: true },
    { value1: 0, value2: 0, expected: true },
    { value1: 0, value2: 1, expected: false },
    { value1: true, value2: true, expected: true },
    { value1: true, value2: false, expected: false },
    { value1: { a: 1, b: 2 }, value2: { a: 1, b: 2 }, expected: true },
    { value1: { a: 1, b: 2 }, value2: { a: 1, b: 3 }, expected: false },
    { value1: [1, 2, 3], value2: [1, 2, 3], expected: true },
    { value1: [1, 2, 3], value2: [3, 2, 1], expected: false }
  ])(
    'validateFieldEquality($value1, $value2) should be $expected',
    ({ value1, value2, expected }) => {
      expect(validateFieldEquality(value1, value2)).toBe(expected)
    }
  )
})
