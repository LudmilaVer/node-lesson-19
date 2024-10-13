const sum = (a: number, b: number): number => a + b;
console.log(sum(3, 3));


function getInfo(str: string, defaultStr?: string): string {
  if (defaultStr && str.length === 0) {
    return defaultStr;
  }
  return `String length = ${str.length}`;
}
console.log(getInfo("Hello"));


const doubleArrayValue = (array: number[]): number[] =>
  array.map((num: number) => num * 3);
console.log(doubleArrayValue([3, 6, 9, 12]));



let fooType: (a: number, b: number) => number;
fooType = (num1: number, num2: number) => num1 + num2;
console.log(fooType(7,7));