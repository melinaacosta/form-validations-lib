import { describe, expect, test } from 'vitest'
import { validateStrongPassword } from '../validateStrongPassword'

describe('validateStrongPassword', () => {
  test.each([
    ['Abcdef12$', true], // Contraseña válida
    ['abc123', false], // Falta letra mayúscula
    ['ABC123', false], // Falta letra minúscula
    ['abcdef', false], // Falta número y carácter especial
    ['Abcdefgh', false], // Falta número y carácter especial
    ['12345678', false], // Falta letra minúscula y carácter especial
    ['!@#$%^&*', false], // Falta letra mayúscula y número
    ['', false],
    [null, false],
    [undefined, false],
    [{}, false],
    [0, false],
    [true, false]
  ])('validateStrongPassword(%j) should be %j', (password, expected) => {
    // TODO: Consultar la resolución de este error
    // @ts-expect-error should accept any value
    expect(validateStrongPassword(password)).toBe(expected)
  })
})
