import { EMAIL_FORMAT_REGEX } from '@/constants/email'

// Función para validar un correo electrónico
export function email(email: string): boolean {
  return EMAIL_FORMAT_REGEX.test(String(email).toLowerCase())
}
