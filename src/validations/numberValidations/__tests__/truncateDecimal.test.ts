import { describe, expect, test } from 'vitest'
import { truncateDecimal } from '../truncateDecimal'

describe('truncateDecimal', () => {
  test.each([
    [3.14159265359, 3.14], // Truncamiento hacia abajo
    [-5.6789, -5.67], // Truncamiento hacia abajo (negativo)
    [0.000000001, 0],
    [100000000000000000000, 100000000000000000000],
    [1.23456789, 1.23],
    [0, 0],
    ['abc', NaN],
    ['', NaN],
    [null, NaN],
    [undefined, NaN],
    [{}, NaN]
  ])('truncateDecimal(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(truncateDecimal(arg)).toBe(expected)
  })
})
