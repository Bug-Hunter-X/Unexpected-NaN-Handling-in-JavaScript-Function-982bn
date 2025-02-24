function foo(a, b) {
  if (a === null || b === null) {
    return 0; // intended behavior
  } else if (a === undefined || b === undefined) {
    return 0; // intended behavior
  } else {
    return a + b; // intended behavior
  }
}

console.log(foo(null, 1)); // Output: 0 (correct)
console.log(foo(undefined, 1)); // Output: 0 (correct)
console.log(foo(1, null)); // Output: 0 (correct)
console.log(foo(1, undefined)); // Output: 0 (correct)
console.log(foo(1, NaN)); // Output: NaN (incorrect, should be 0)
console.log(foo(NaN, 1)); // Output: NaN (incorrect, should be 0)