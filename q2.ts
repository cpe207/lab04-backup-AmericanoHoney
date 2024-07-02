//660610757 ณัฐรดา หนูจิตร

function arrayStringify(a : Array<number>): string
{
  let result = `` ;
  for (let i = 0; i < a.length; i++) {
    result += `${a[i]}`; 
  }
  return result;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
 
//npx ts-node q2.ts
