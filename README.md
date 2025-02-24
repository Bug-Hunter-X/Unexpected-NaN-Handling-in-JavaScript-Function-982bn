# Unexpected NaN Handling in JavaScript Function

This repository demonstrates a subtle bug in a JavaScript function related to handling `NaN` (Not a Number) values. The function is designed to return 0 if either input is `null` or `undefined`, but it fails to correctly handle `NaN` inputs, resulting in unexpected `NaN` outputs.

## Bug Description

The `foo` function intends to return 0 if either `a` or `b` is `null` or `undefined`. However, it does not explicitly check for `NaN`, leading to incorrect results when `NaN` is passed as an argument.

## Bug Solution

The solution involves adding an explicit check for `isNaN()` for both input parameters `a` and `b`. This ensures that the function returns 0 as intended, regardless of whether the input is `null`, `undefined`, or `NaN`.