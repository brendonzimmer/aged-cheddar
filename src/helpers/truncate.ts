export function truncate(num: number) {
  const str = num.toString();
  return +str.slice(0, str.indexOf("."));
}
