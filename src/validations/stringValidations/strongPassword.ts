// Función para validar si una contraseña es lo suficientemente fuerte
export function strongPassword(password: string): boolean {
  // Verificar si la contraseña es indefinida o nula
  if (password === undefined || password === null) {
    return false
  }

  // Al menos 8 caracteres
  if (password.length <= 8) {
    return false
  }
  // Al menos una letra minúscula
  if (!/[a-z]/.test(password)) {
    return false
  }
  // Al menos una letra mayúscula
  if (!/[A-Z]/.test(password)) {
    return false
  }
  // Al menos un número
  if (!/\d/.test(password)) {
    return false
  }
  // Al menos un carácter especial
  if (!/[$@$!%*?&]/.test(password)) {
    return false
  }
  return true
}
