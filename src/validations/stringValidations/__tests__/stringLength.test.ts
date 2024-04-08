import { describe, expect, test } from 'vitest'

describe('stringLength', () => {
  test.each([
    ['abcdef', 2, 6, true], // Cadena dentro del rango
    ['abc', 2, 6, true], // Cadena justo en el mínimo
    ['abcdefg', 2, 6, false], // Cadena justo en el máximo
    ['ab', 2, 6, true], // Cadena con longitud mínima
    ['abcdefg', 2, 5, false], // Cadena más larga que el máximo
    ['', 2, 6, false],
    [null, 2, 6, false],
    [undefined, 2, 6, false],
    [{}, 2, 6, false],
    [0, 2, 6, false],
    [true, 2, 6, false]
  ])(
    'stringLength(%j, %i, %i) should be %j',
    (str, minLength, maxLength, expected) => {
      // TODO: Consultar la resolución de este error
      // @ts-expect-error should accept any value
      expect(stringLength(str, minLength, maxLength)).toBe(expected)
    }
  )
})
