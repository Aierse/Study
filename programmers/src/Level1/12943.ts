export function solution(s: number) {
  for (let i = 0; i < 500; i++) {
    if (s === 1) return i;

    if (s % 2 === 0) s /= 2;
    else s = s * 3 + 1;
  }
  return -1;
}
