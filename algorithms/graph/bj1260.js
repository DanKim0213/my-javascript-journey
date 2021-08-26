// https://www.acmicpc.net/problem/1260

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [vertexCount, edgeCount, startV] = input[0]
  .split(" ")
  .map((value) => parseInt(value));

let adjacentList = Array.from(new Array(vertexCount + 1), () => []);

for (let i = 1; i < input.length; i++) {
  let [u, v] = input[i].split(" ").map((value) => parseInt(value));
  adjacentList[u].push(v);
  adjacentList[v].push(u);
}

for (let v in adjacentList) {
  adjacentList[v].sort((a, b) => a - b);
}

function DFS(start, visit = []) {
  const hasVisited = new Array(vertexCount + 1).fill(false);
  const path = [];

  function recursive(start, path = []) {
    path.push(start);
    hasVisited[start] = true;

    adjacentList[start].forEach((next) => {
      if (!hasVisited[next]) {
        path = recursive(next, path);
      }
    });

    return path;
  }

  return recursive(start);
}

function BFS(start) {
  const hasVisited = new Array(vertexCount + 1).fill(false);
  let path = [start];
  let q = [start];
  hasVisited[start] = true;

  while (q.length > 0) {
    let current = q.shift();
    adjacentList[current].forEach((next) => {
      if (!hasVisited[next]) {
        hasVisited[next] = true;
        path.push(next);
        q.push(next);
      }
    });
  }

  return path;
}

const dfsResult = DFS(startV);
const bfsResult = BFS(startV);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
