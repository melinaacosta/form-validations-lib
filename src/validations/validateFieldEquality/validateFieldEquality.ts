// Función que verifica si dos campos son iguales
export function validateFieldEquality(
  value1: string | number | boolean | object | null | undefined,
  value2: string | number | boolean | object | null | undefined
): boolean {
  // Verifica si los tipos de los valores son iguales
  if (typeof value1 !== typeof value2) {
    throw new Error('Los tipos de los valores no coinciden')
  }

  if (typeof value1 === 'object' && typeof value2 === 'object') {
    // Si ambos valores son objetos, los compara mediante JSON.stringify
    return JSON.stringify(value1) === JSON.stringify(value2)
  } else {
    // Para cualquier otro tipo de valor, realiza una comparación directa
    return value1 === value2
  }
}
