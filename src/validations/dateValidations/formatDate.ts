import { DATE_FORMAT_REGEX } from '@/constants/date'

// Función para validar una fecha en formato YYYY-MM-DD
export function formatDate(date: string): boolean {
  return DATE_FORMAT_REGEX.test(date)
}
