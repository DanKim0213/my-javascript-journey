// https://www.acmicpc.net/problem/1012

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = +input[0];
input = input.slice(1);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let res = '';

function createLand(M, N, cabbagePos) {
  let arr = [];
  let index = 0;
  
  for (let i = 0; i < N; i++) {
    arr[i] = [];
    for (let j = 0; j < M; j++) {
      arr[i][j] = 0;      
    } 
  }
  cabbagePos.forEach(pos => {
    arr[pos[1]][pos[0]] = 1;
  });
  return arr;
}

function checkRange(x, y, M, N) {
  if ((0 <= x && x < M) && (0 <= y && y < N)) {
    return true;
  }
  return false;
}

for (let i = 0; i < cases; i++) {
  let [M, N, K] = input[0].split(' ').map(Number); //M 가로 N 세로 K 배추 수
  let cabbagePos = input.slice(1, K + 1).map(v => v.split(' ').map(Number));
  let land = createLand(M, N, cabbagePos);
  
  let q = [];
  let count = 0;
  cabbagePos.forEach(pos => {
    if (land[pos[1]][pos[0]] === 2) 
        return ;
      
    
    q.push(pos);
    land[pos[1]][pos[0]] = 2;
    
    while (q.length) {
      const node = q.shift();
      land[node[1]][node[0]] = 2;
      for (let j = 0; j < 4; j++) {
        let nx = dx[j] + node[0];
        let ny = dy[j] + node[1];
        if (checkRange(nx, ny, M, N) && land[ny][nx] === 1) {
          q.push([nx, ny]);
          land[ny][nx] = 2;
        }
      }
    }
    
    count++;
  });
  res += count + '\n';
  input = input.slice(K + 1);  
}

console.log(res)
