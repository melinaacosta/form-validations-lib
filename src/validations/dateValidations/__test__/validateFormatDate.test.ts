import { describe, expect, test } from 'vitest'
import { validateFormatDate } from '../validateFormatDate'

describe('validateFormatDate', () => {
  test.each([
    ['2022-01-01', true], // Fecha válida en formato YYYY-MM-DD
    ['abc', false],
    ['', false],
    [null, false],
    [undefined, false],
    [{}, false]
  ])('validateFormatDate(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(validateFormatDate(arg)).toBe(expected)
  })
})
