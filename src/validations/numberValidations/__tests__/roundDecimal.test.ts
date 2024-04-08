import { describe, expect, test } from 'vitest'
import { roundDecimal } from '../roundDecimal'

describe('roundDecimal', () => {
  test.each([
    [3.14159265359, 3.14], // Redondeo hacia abajo
    [10.56789, 10.57], // Redondeo hacia arriba
    [123.456, 123.46], // Redondeo normal
    [-5.6789, -5.68], // Redondeo hacia arriba (negativo)
    [0, 0],
    ['abc', NaN],
    ['', NaN],
    [null, NaN],
    [undefined, NaN],
    [{}, NaN]
  ])('roundDecimal(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(roundDecimal(arg)).toBe(expected)
  })
})
