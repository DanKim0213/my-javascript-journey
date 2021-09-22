let n: number;
const areFriends: Array<boolean[]> = new Array(10); 
areFriends.fill(new Array(10));
areFriends.forEach(arr => arr.fill(false));

const countPairings = (taken: boolean[]): number => {
  let finished = true;
  for (let i = 0; i < n; i++) 
    if (!taken[i]) finished = false;

  if (finished) return 1;
  let ret = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!taken[i] && !taken[j] && areFriends[i][j]) {
        taken[i] = taken[j] = true;
        ret += countPairings(taken);
        taken[i] = taken[j] = false;
      }
    }
  }

  return ret;
}

console.log('are friends ', areFriends);
