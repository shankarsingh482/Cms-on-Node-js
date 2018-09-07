const lib = require('../excercise1');
describe('fizzBuzz',()=>{
    it('should throw an exception if input is not a number',()=>{

        expect(()=>{ lib.fizzBuzz('a')}).toThrow();

        expect(()=>{ lib.fizzBuzz(null)}).toThrow();

        expect(()=>{ lib.fizzBuzz(undefined)}).toThrow();

        expect(()=>{ lib.fizzBuzz({})}).toThrow();

    });


    it('should return  Fizz buzz if number is divisible by 3 and 5',()=>{
        const result = lib.fizzBuzz(15)
        expect(result).toBe('FizzBuzz');
});

    it('should return  Fizz  if number is divisible by 3',()=>{
        const result = lib.fizzBuzz(12)
        expect(result).toBe('Fizz');
    });

    it('should return  buzz if number is divisible by 5',()=>{
        const result = lib.fizzBuzz(10)
        expect(result).toBe('Buzz');
    });

    it('should return same input if number is neither divisbile by 3 nor 5 ',()=>{
        const result = lib.fizzBuzz(1)
        expect(result).toBe(1);
    });

});