// Función para validar si un campo es obligatorio
export function isRequired(value: unknown): boolean {
  // Verificar si el valor no es nulo, no es indefinido o no es una cadena vacía
  return value !== null && value !== undefined && value !== ''
}
