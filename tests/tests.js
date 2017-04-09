'use strict'
var jasmine = require('jasmine');
var getPrimes = require('../app/index.js').getPrimes;

describe("Get prime tests ", function() {

  it("should return `[2,3]` for 3", function() {
    var list = [2,3];
    expect(getPrimes(3)).toEqual(list);
  });

  it("should return `[2,3,5,7,11,13,17,19]` for 20", function() {
    expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
  });

  it("should return `Please enter a non zero number` for 0", function() {
    expect(getPrimes(0)).toBe('Please enter a non zero number');
  });

  it("should return `Please enter a positive number` for -1", function() {
    expect(getPrimes(-1)).toBe('Please enter a positive number');
  });

  it("should return `Invalid. Please enter a number` for non numbers", function() {
    expect(getPrimes('non number')).toBe('Invalid. Please enter a number');
  });

  it("should return '[]' for 1", function() {
    expect(getPrimes(1)).toEqual([]);
  });

  it("should return `[2,3,5,7,11,13,17]` for 18", function() {
    expect(getPrimes(18)).toEqual([2,3,5,7,11,13,17]);
  });

  it("should return [2,3,5,7,11,13,17,23]", function() {
    expect(getPrimes(25)).toEqual([2,3,5,7,11,13,17,19,23]);
  });

  it("should return [2,3,5,7]", function() {
    expect(getPrimes(10)).toEqual([2,3,5,7]);
  });

  it("should return 103 since its indivisible by 3 and 5", function() {
    expect(getPrimes(40)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37]);
  });

  /*it("should return 17 since its indivisible by 3 and 5", function() {
    expect(getPrimes(17)).toBe(17);
  });*/
});