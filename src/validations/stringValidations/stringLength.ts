export function stringLength(
  str: string,
  minLength: number,
  maxLength: number
): boolean {
  if (str === null || str === undefined) {
    return false
  }
  return str.length >= minLength && str.length <= maxLength
}
