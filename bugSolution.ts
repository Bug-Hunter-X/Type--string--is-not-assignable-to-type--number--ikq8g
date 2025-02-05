function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result: number = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

// This line will now generate a compiler error because 'result' is of type number
// result = "hello";

//To handle potential string input, use union type:
let result2: number | string = add(5,3);
result2 = "hello";
result2 = subtract(10,5);