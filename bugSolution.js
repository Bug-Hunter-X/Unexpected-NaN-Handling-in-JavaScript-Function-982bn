function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
    return 0; // Correctly handles null, undefined, and NaN
  } else {
    return a + b; // intended behavior
  }
}

console.log(foo(null, 1)); // Output: 0 (correct)
console.log(foo(undefined, 1)); // Output: 0 (correct)
console.log(foo(1, null)); // Output: 0 (correct)
console.log(foo(1, undefined)); // Output: 0 (correct)
console.log(foo(1, NaN)); // Output: 0 (correct)
console.log(foo(NaN, 1)); // Output: 0 (correct)