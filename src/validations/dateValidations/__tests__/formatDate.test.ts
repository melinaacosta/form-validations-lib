import { describe, expect, test } from 'vitest'
import { formatDate } from '../formatDate'

describe('formatDate', () => {
  test.each([
    ['2022-01-01', true], // Fecha válida en formato YYYY-MM-DD
    ['01-01-2023abc', false],
    ['abc', false],
    ['', false],
    [null, false],
    [undefined, false],
    [{}, false]
  ])('validateFormatDate(%j) should be %j', (arg, expected) => {
    // @ts-expect-error should accept any value
    expect(formatDate(arg)).toBe(expected)
  })
})
