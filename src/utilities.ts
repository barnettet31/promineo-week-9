export const everyNthElement = function <T>(arr: T[], n: number): T[] {
if(n===1) return [arr[0]];
  return arr.filter((_, i) => i % n === 0);
};
