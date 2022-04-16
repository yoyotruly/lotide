# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yoyotruly/lotide`

**Require it:**

`const _ = require('@yoyotruly/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`  
  Tests for equality between two values of primitive types and prints out a colorful message to inform if the assertion passes or fails.
* `assertArraysEqual`  
  Tests for equality between two arrays and prints out a colorful message to inform if the assertion passes or fails.
* `assertObjectsEqual`  
  Tests for equality between two objects and prints out a colorful message to inform if the assertion passes or fails.
* `eqArrays`  
  Takes in two arrays and returns true or false based on a perfect match.
* `eqObjects`  
  Takes in two objects and returns true or false based on a perfect match.
* `countLetters`  
  Given a string, returns an object containing counts of each of the letters in that string.
* `countOnly`  
  Given an array and an object, returns an object containing counts of everything that an input object listed.
* `findKey`  
  Given an object and a callback function, returns the first key for which the callback returns a truthy value. If no key is found, returns undefined.
* `findKeyByValue`  
  Given an object and a value, returns the first key which contains the given value. Returns undefined if no key with that value is found.
* `flatten`  
  Flattens a nested array into a single-level array.
* `head`  
  Retrieves the first element from an array.
* `letterPositions`  
  Returns all the indices in a string where each character is found.
* `map`  
  Returns a new array based on the results of the callback function on every element of the given array.
* `middle`  
  Retrieves the middle-most element(s) of an array.
* `tail`  
  Retrieves every element except the first element (head) of the array.
* `takeUntil`  
  Returns a slice of the given array with elements taken from the beginning. Elements are taken until the callback returns a truthy value.
* `without`  
  Returns a subset of an array with unwanted elements removed.