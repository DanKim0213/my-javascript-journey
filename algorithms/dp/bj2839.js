// https://www.acmicpc.net/problem/2839

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

test();
function test(){
    let result =0;

    for (i = 3; i <= 15; i += 3) {
        if (input % 5 === 0) {
          result += input / 5;
          input = 0;
          break;
        }
        input -= 3;
        if (input >= 0) result += 1;
        else break;
      }
      console.log(input === 0 ? result : -1);
}