/**
 * truncates number at the decimal point (like an int).
 * @internal
 */
export function truncate(num: number) {
  const str = num.toString();
  return +str.slice(0, str.indexOf("."));
}
