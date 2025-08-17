// 2
// max = - Infinity
export function maxOrNull(arr) {
  let max = - Infinity;
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}
console.log(maxOrNull([1, -4, 2]));
