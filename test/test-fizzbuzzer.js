// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzzer
const fizzbuzzer = require('../fizzbuzzer');

// unit tests for our `fizzbuzzer' function
describe('fizzbuzzer', function() {

  // test the normal case
  it('if a number divided by 15 leaves no remainder, return fizz-fuzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15},
      {num: 30},
      {num: -45}
    ];
    // for each set of inputs (a), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.num);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  // test the normal case
  it('if a number divided by 5 leaves no remainder, return buzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 5},
      {num: 25},
      {num: -5}
    ];
    // for each set of inputs (a), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.num);
      expect(answer).to.equal('buzz');
    });
  });

  // test the normal case
  it('fi a number divided by 3 leaves no remainder, return fizz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 6},
      {num: 9},
      {num: -3}
    ];
    // for each set of inputs (a), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzbuzzer(input.num);
      expect(answer).to.equal('fizz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs: non-numbers and numbers that leave a remainder
    const badInputs = [
      {num:'a'},
      {num: false},
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzbuzzer(input[0]);
      }).to.throw(Error);
    });
  }); 
});