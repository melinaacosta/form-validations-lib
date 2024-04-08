import { describe, expect, test } from 'vitest'
import { email } from '../email'

describe('email', () => {
  test.each([
    ['test@example.com', true], // Correo electrónico válido
    ['test@com', false], // Correo electrónico inválido (falta el dominio)
    ['test.example.com', false], // Correo electrónico inválido (falta el símbolo @)
    ['test@example', false], // Correo electrónico inválido (falta el dominio de nivel superior)
    ['abc', false],
    ['', false],
    [null, false],
    [undefined, false],
    [{}, false]
  ])('email(%j) should be %j', (arg, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(email(arg)).toBe(expected)
  })
})
