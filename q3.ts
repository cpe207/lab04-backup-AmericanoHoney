//660610757 ณัฐรดา หนูจิตร

function primeNumber(a : number) : string 
{
  for (let i:number = 2; i < a-1; i++) 
  {
    if( a%i == 0 ) return `NO`;
  }
  return `YES`;
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//npx ts-node q3.ts