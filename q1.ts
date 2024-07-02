//660610757 ณัฐรดา หนูจิตร

function typeChecker(a: any, b: any): string | number{

  if (typeof a === typeof b && typeof a === 'string') 
  {
    return `I LOVE YOU`;
  } 
  else if (typeof a === typeof b && typeof a === 'number') 
  {
    return a+b;
  }
  else
  {
    return `NOT MATCHED`
  }

}

//Test cases
const a1 = "Jack";
const b1 = "Rose";
const a2 = 555;
const b2 = 100;
const a3 = "Jack";
const b3 = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;

// npx ts-node q1.ts