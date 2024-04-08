// Función para truncar un número decimal a dos decimales sin redondeo
export function truncateDecimal(number: number): number {
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN
  }
  return Math.trunc(number * 100) / 100
}
