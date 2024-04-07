// Función para validar si un campo está vacío
export function formIsEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true
  }

  if (typeof value === 'string') {
    return value.trim() === ''
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return false
}
