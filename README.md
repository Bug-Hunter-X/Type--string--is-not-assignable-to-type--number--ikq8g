# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript type error: assigning a string value to a variable that's been previously typed as a number.

## The Bug

The `bug.ts` file contains a simple program with two functions that add and subtract numbers.  A variable, `result`, is declared and used to store the results of the arithmetic operations. However, later in the code, a string is assigned to this variable resulting in a type error.

## The Solution

The `bugSolution.ts` file presents a fix for this bug. The solution ensures that the 'result' variable maintains its number type throughout the program or uses type assertion or union types as needed.