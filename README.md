# Mapmaker Mapmaker

### Introduction

Mapping - it's string-building for arrays!

Kind of like "Tinder for ____", but... less [Silicon Valley](https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)).


### Workflow

This is your typical test-run assignment. `jest --watch-all` is your friend!


### Guidelines

* Now that we're not dealing with strings as our main focus--we'll be using strings, but focusing overall on the arrays that hold them--, let's open things up to using string methods. You should find `.slice` and `.indexOf` (the string version, not the array version) particularly useful. A little research is your friend on this!
* Also useful: `Math.abs`, which takes in a number and gives you back its absolute value. Check it out!
* **But do not use ANY array methods.** Particularly `.map`-- that' the one we're doing manually here, after all!


### Tasks

* `doubleAll` - returns all numbers but doubled from the given array
  * doubleAll([1, 2, 3, 4]) -> [2, 4, 6, 8]
  * doubleAll([-5, 101, 0, 32.5]) -> [-10, 202, 0, 65]
* `yelledGreetings` - returns the same strings but with exclamation points appended from the given array
  * yelledGreetings(['hello', 'there', 'you absolute fiend']) -> ['hello!', 'there!', 'you absolute fiend!']
  * yelledGreetings(['hey', 'you']) -> ['hey!', 'you!']
* `absoluteValues` - returns the absolute values of all numbers in the given array
  * absoluteValues([-1, -3, 1000]) -> [1, 3, 1000]
  * absoluteValues([1, -5, 100]) -> [1, 5, 100]
* `upperCaseFirstLetters` - returns a version of each string in the given array where the first letter has been capitalized
  * upperCaseFirstLetters(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin']) -> ['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin']
  * upperCaseFirstLetters(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin']) -> ['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin']
* `changeToInitials` - returns the first letters from each word in the given array
  * changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq']) -> ['CJ', 'MK']
  * changeToInitials(['Larry Bird', 'Robert Parrish']) -> ['LB', 'RP']
* `doubleOdd` - returns the numbers from the given array untouched, except for odd numbers (positive or negative), which it doubles
  * doubleOdd([1, 2, 3, 4, 101, 0, 32.5]) -> [2, 2, 6, 4, 202, 0, 32.5]
  * doubleOdd([-5, -1, -100, -2]) -> [-10, -2, -100, -2]
* `add1ToLeft` - returns the numbers from the given array but with 1 added to the left side of each
  * add1ToLeft([1, 2, 30, 400]) -> [11, 12, 130, 1400]
  * add1ToLeft([-1, -50]) -> [-11, -150]
