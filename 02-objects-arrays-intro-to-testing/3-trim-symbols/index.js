/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let stringArr = string.split(''),
    chunk_size = 0,
    result = [];
  if (size === 0) {
    return ''
  } else {
    for (let i = 0; i < stringArr.length; i++) {
      if (chunk_size >= size) {
        if (stringArr[i] !== result[result.length - 1]) {
          result.push(stringArr[i])
          chunk_size = 1
        }
      } else {
        if (stringArr[i] !== result[result.length - 1]) {
          chunk_size = 1
        } else {
          chunk_size++
        }
        result.push(stringArr[i])
      }
    }
    return result.join('')
  }
}
