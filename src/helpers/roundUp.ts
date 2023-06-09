export function roundUp(num: number, precision: number) {
  precision = 10 ** precision;
  return Math.ceil(num * precision) / precision;
}
