// Función para validar una fecha en formato YYYY-MM-DD
export function formatDate(date: string): boolean {
  const re = /^\d{4}-\d{2}-\d{2}$/
  return re.test(date)
}
