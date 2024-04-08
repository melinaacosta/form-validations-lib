// Función para validar si un número es positivo
export function isPositiveNumber(number: number): boolean {
  if (typeof number !== 'number' || isNaN(number)) {
    return false
  }
  return number > 0
}
