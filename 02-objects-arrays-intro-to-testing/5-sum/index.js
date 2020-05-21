/**
 * Sum - returns sum of arguments if they can be converted to a number
 * @param {number} n value
 * @returns {number | function}
 */
export function sum(n) {
  const result = newArgument => sum.call(null, n + newArgument);
  result.valueOf = () => (n === undefined || isNaN(n)) ? 0 : n;
  return result;
}
