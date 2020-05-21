/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  let reversed = {};
  for (let key in obj) {
    reversed[obj[key]] = key;
  }
  return (obj !== undefined) ? reversed : undefined;
}
