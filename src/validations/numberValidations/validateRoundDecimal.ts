// Función para redondear un número decimal a dos decimales
export function roundDecimal(number: number): number {
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN
  }
  return Math.round(number * 100) / 100
}
